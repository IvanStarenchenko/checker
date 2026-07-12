import {
	IDashboardStats,
	IHistoryWithPersona
} from '@/interfaces/Dashboard.interface'
import { getHistory } from '@/services/getHistory.service'

const MINIMUM_PASSING_SCORE = 50
const MAX_SCORE = 100

export async function getDashboardStatistics(): Promise<IDashboardStats> {
	const { historyList } = (await getHistory()) as unknown as {
		historyList: IHistoryWithPersona[]
	}

	const totalReviews = historyList.length

	const averageScore =
		historyList.reduce(
			(acc: number, historyItem: IHistoryWithPersona) =>
				acc + historyItem.score,
			0
		) / (totalReviews || 1)

	const lowScoreReviewCount = historyList.reduce(
		(acc: number, review: IHistoryWithPersona) =>
			acc + (review.score < MINIMUM_PASSING_SCORE ? 1 : 0),
		0
	)

	const sortedReviews: IHistoryWithPersona[] = [...historyList].sort(
		(a, b) => b.score - a.score
	)

	const bestReview: IHistoryWithPersona | undefined = sortedReviews[0]
	const topReviewScore = bestReview ? `${bestReview.score}/${MAX_SCORE}` : '0'
	const topReviewFile = bestReview ? bestReview.filePath : 'No reviews yet'
	const totalScorePerMonth = historyList.reduce(
		(acc: number, review: IHistoryWithPersona) => acc + review.score,
		0
	)
	return {
		totalReviews,
		averageScore,
		lowScoreReviewCount,
		sortedReviews,
		topReviewScore,
		topReviewFile,
		totalScorePerMonth,
		MINIMUM_PASSING_SCORE,
		MAX_SCORE
	}
}
