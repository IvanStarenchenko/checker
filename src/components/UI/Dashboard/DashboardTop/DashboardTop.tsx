'use client'
import { BadgeAlert, Code, Terminal, TrendingUp } from 'lucide-react'
import { useStatInfo } from '../hooks/useStatInfo'
import { DashboardInfo } from './DashboardInfo'

export function DashboardTop() {
	const { totalReviews, avgScore, badIssuesCount, topReviews } = useStatInfo()

	const bestReview = topReviews[0]

	const topReviewScore = bestReview ? `${bestReview.score}/100` : '0'
	const topReviewFile = bestReview ? bestReview.filePath : 'No reviews yet'

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
				info={avgScore.toFixed(2)}
				icon={TrendingUp}
				color="green"
			/>

			<DashboardInfo
				name="Critical Issues"
				info={badIssuesCount}
				icon={BadgeAlert}
				color="red"
			/>

			<DashboardInfo
				name="Files Reviewed"
				info={totalReviews}
				icon={Terminal}
				color="yellow"
			/>
		</div>
	)
}