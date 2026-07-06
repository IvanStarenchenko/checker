'use client'
import { issues, reviews } from '@/db/schema'
import { useHistoryStore } from '@/store/useHistoryStore'
import { useSettingsStore } from '@/store/useSettingsStore'
import { Header } from './Header'
import { ReviewDisplay } from './ReviewDisplay'


interface RightProps {
	reviewId?: string
	review?: typeof reviews.$inferSelect | null
	issues?: typeof issues.$inferSelect[]
}

export function Right({ reviewId, review, issues }: RightProps) {
	const { persona } = useSettingsStore()
	const { addHistory } = useHistoryStore()

	return (
		<div className="flex flex-col h-full bg-[#0b0f19]/40 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
			<Header />
			<div className="flex-1 bg-[#070a13]/60 flex flex-col min-h-0">
				<ReviewDisplay reviewId={reviewId} review={review} detectedIssues={issues} persona={persona} addHistory={addHistory} />
			</div>
		</div>
	)
}