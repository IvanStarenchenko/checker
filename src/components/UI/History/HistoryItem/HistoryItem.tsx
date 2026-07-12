import { getHistory } from '@/services/getHistory.service'
import { getReview } from '@/services/getReview.service'
import { Body } from './Body/Body'
import { CodeDiffViewer } from './CodeDiffViewer'
import { NoReview } from './NoReview'
import { Top } from './Top/Top'
interface HistoryItemProps {
	reviewId: string
}

export async function HistoryItem({ reviewId }: HistoryItemProps) {
	const review = await getReview(reviewId)
	const { reviewer } = await getHistory({ id: reviewId })
	const noIssue = review?.issues?.length === 0
	if (!review) {
		return <NoReview id={reviewId} />
	}

	return (
		<div className="text-slate-200 font-sans space-y-6 max-w-6xl mx-auto p-4">

			<Top
				score={review.score}
				language={review.language}
				createdAt={review.createdAt}
				filePath={review.filePath}
			/>

			<Body
				personaId={review.personaId}
				reviewer={reviewer}
				summary={review.summary}
				issuesCount={review.issues?.length || 0}
				noIssue={noIssue}
				issues={review.issues}
			/>

			<CodeDiffViewer
				codeBefore={review.codeBefore}
				codeAfter={review.codeAfter}
			/>

		</div>
	)
}