'use server'

import { db } from '@/db'
import { issues, reviews } from '@/db/schema'
import { createGoogle } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

interface AnalyzeInput {
	code: string
	language: string
	personaId: string
	filePath: string
}

export async function analyzeCodeAction(input: AnalyzeInput) {
	const GOOGLE_GENERATIVE_AI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY

	try {
		const googleProvider = createGoogle({
			apiKey: GOOGLE_GENERATIVE_AI_API_KEY || ''
		})

		const { object } = await generateObject({
			model: googleProvider('gemini-2.5-flash'),
			system: `You are an expert code reviewer acting as the "${input.personaId}" persona. 
        Analyze the provided ${input.language} code. 
        Be critical, objective, and adhere strictly to your persona's behavior. 
        Provide a quality score (1-100), a brief summary, and a list of specific issues found in the code.`,
			prompt: `Language: ${input.language}\n\nCode to analyze:\n${input.code}`,
			schema: z.object({
				score: z.number().min(1).max(100),
				summary: z.string(),
				codeAfter: z
					.string()
					.describe(
						'Refactored or improved version of the entire code snippet'
					),
				issues: z.array(
					z.object({
						severity: z.enum(['critical', 'warning', 'suggestion']),
						lineNumber: z
							.number()
							.nullable()
							.describe(
								'Line number where the issue occurs, or null if general'
							),
						message: z.string().describe('Clear explanation of what is wrong'),
						suggestion: z
							.string()
							.describe('Code example or fix recommendation')
					})
				)
			})
		})

		const [newReview] = await db
			.insert(reviews)
			.values({
				filePath: input.filePath || 'untitled.ts',
				language: input.language,
				personaId: input.personaId,
				score: object.score,
				summary: object.summary,
				codeBefore: input.code,
				codeAfter: object.codeAfter
			})
			.returning()

		if (object.issues.length > 0) {
			const issuesToInsert = object.issues.map(issue => ({
				reviewId: newReview.id,
				severity: issue.severity,
				lineNumber: issue.lineNumber,
				message: issue.message,
				suggestion: issue.suggestion
			}))

			await db.insert(issues).values(issuesToInsert)
		}

		revalidatePath('/workspace')

		return { success: true, reviewId: newReview.id }
	} catch (error) {
		console.error('Gemini Analysis Error:', error)
		return { success: false, error: 'AI analysis failed' }
	}
}
