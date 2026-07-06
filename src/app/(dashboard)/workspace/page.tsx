import { Workspace } from '@/components/Screens/Workspace'
import { db } from '@/db'
import { issues, reviews } from '@/db/schema'
import { eq } from 'drizzle-orm'

interface PageProps {
	searchParams: Promise<{ reviewId?: string }>
}

export default async function WorkspacePage({ searchParams }: PageProps) {
	const { reviewId } = await searchParams

	let review = null
	let reviewIssues: typeof issues.$inferSelect[] = []

	if (reviewId) {
		review = await db.select().from(reviews).where(eq(reviews.id, reviewId)).get() || null
		if (review) {
			reviewIssues = await db.select().from(issues).where(eq(issues.reviewId, reviewId)).all()
		}
	}

	return <Workspace reviewId={reviewId} review={review} issues={reviewIssues} />
}