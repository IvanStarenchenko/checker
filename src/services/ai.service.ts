import { AnalyzeInput } from '@/interfaces/AIAnalyzer'
import { ReviewOutput, reviewOutputSchema } from '@/lib/ai/schemas'
import { createGoogle } from '@ai-sdk/google'
import { generateObject } from 'ai'

export async function generateCodeReview(
	input: AnalyzeInput
): Promise<ReviewOutput> {
	const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

	const googleProvider = createGoogle({
		apiKey: apiKey || ''
	})

	const { object } = await generateObject({
		model: googleProvider('gemini-2.5-flash'),
		system: `You are an expert code reviewer acting as the "${input.persona.name}" Your personal description witch you have to act like: ${input.persona.description} and ${input.persona.prompt}`,
		prompt: `Language: ${input.language}\n\nCode to analyze:\n${input.code}`,
		schema: reviewOutputSchema
	})

	return object
}
