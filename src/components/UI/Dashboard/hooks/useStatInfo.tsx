import { useHistoryStore } from '@/store/useHistoryStore'

export function useStatInfo() {
	const { history } = useHistoryStore()
	const totalReviews = history.length
	const avgScore = history.reduce((acc, item) => acc + item.score, 0) / (totalReviews || 1)
	const badIssuesCount = history.reduce((acc, item) => acc + (item.score < 50 ? 1 : 0), 0)
	const topReviews = history.sort((a, b) => b.score - a.score)



	return { totalReviews, avgScore, badIssuesCount, topReviews }
}
