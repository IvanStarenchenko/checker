// src/services/review.service.ts
import { db } from '@/db'
import { history, issues, reviews } from '@/db/schema'
import { AnalyzeInput } from '@/interfaces/AIAnalyzer'
import { TCodeLanguage } from '@/interfaces/Settings.interface'
import { ReviewOutput } from '@/lib/ai/schemas'

export async function saveReviewToDatabase(
	input: AnalyzeInput,
	aiResult: ReviewOutput
) {
	const DEFAULT_FILE_PATH = 'untitled.ts'
	const reviewFilePath = input.filePath || DEFAULT_FILE_PATH

	return db.transaction(tx => {
		const newReview = tx
			.insert(reviews)
			.values({
				filePath: reviewFilePath,
				language: input.language as TCodeLanguage,
				personaId: input.persona.id,
				score: aiResult.score,
				summary: aiResult.summary,
				codeBefore: input.code,
				codeAfter: aiResult.codeAfter
			})
			.returning()
			.get()

		if (aiResult.issues.length > 0) {
			const issuesToInsert = aiResult.issues.map(issue => ({
				reviewId: newReview.id,
				severity: issue.severity,
				lineNumber: issue.lineNumber,
				message: issue.message,
				suggestion: issue.suggestion
			}))

			tx.insert(issues).values(issuesToInsert).run()
		}

		tx.insert(history)
			.values({
				reviewId: newReview.id,
				filePath: reviewFilePath,
				personaId: input.persona.id,
				language: input.language as TCodeLanguage,
				score: aiResult.score,
				date: new Date()
			})
			.run()

		return newReview
	})
}
