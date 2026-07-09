import { db } from '@/db'
import { reviews } from '@/db/schema'
import { IReviewWithIssues } from '@/interfaces/review.interface'
import { eq } from 'drizzle-orm'

export async function getReview(id: string): Promise<IReviewWithIssues | null> {
	if (!id) return null

	const review = await db.query.reviews.findFirst({
		where: eq(reviews.id, id),
		with: {
			issues: true
		}
	})

	return review ?? null
}
