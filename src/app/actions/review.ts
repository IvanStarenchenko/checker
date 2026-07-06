'use server'

import { AnalyzeInput } from '@/interfaces/AIAnalyzer'
import { generateCodeReview } from '@/services/ai.service'
import { saveReviewToDatabase } from '@/services/review.service'
import { revalidatePath } from 'next/cache'

export type ReviewAnalysisResult =
	| { success: true; reviewId: string }
	| { success: false; error: string }

export async function analyzeCodeAction(
	input: AnalyzeInput
): Promise<ReviewAnalysisResult> {
	try {
		const generatedReviewDetails = await generateCodeReview(input)

		const newReview = await saveReviewToDatabase(input, generatedReviewDetails)

		revalidatePath('/workspace')

		return { success: true, reviewId: newReview.id }
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error('Gemini Analysis Error:', error.message)
		}

		return { success: false, error: 'AI analysis failed' }
	}
}
