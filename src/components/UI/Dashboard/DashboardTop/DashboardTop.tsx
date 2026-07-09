
import { getDashboardStatistics } from '@/services/getDashboardStatistics.service'
import { BadgeAlert, Code, Terminal, TrendingUp } from 'lucide-react'
import { DashboardInfo } from './DashboardInfo'

export async function DashboardTop() {
	const { totalReviews, averageScore, lowScoreReviewCount, topReviewScore, topReviewFile, MINIMUM_PASSING_SCORE, MAX_SCORE } = await getDashboardStatistics()


	return (
		<div className="grid grid-cols-4 gap-4">
			<DashboardInfo
				name="Top Review"
				info={topReviewScore}
				stat={topReviewFile}
				icon={Code}
				color="blue"
			/>

			<DashboardInfo
				name="Avg. Quality Score"
				info={averageScore.toFixed(2)}
				icon={TrendingUp}
				color="green"
			/>

			<DashboardInfo
				name="Worst Reviews"
				stat={`Score < ${MINIMUM_PASSING_SCORE}`}
				info={lowScoreReviewCount}
				icon={BadgeAlert}
				color="red"
			/>

			<DashboardInfo
				name="Files Reviewed"
				stat="Total Reviews"
				info={totalReviews}
				icon={Terminal}
				color="yellow"
			/>
		</div>
	)
}