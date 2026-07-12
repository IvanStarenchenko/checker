import { IReviewWithIssues } from '@/interfaces/review.interface'
import { Terminal } from 'lucide-react'
import { IssuesList } from '../IssuesList'

interface BodyProps {
	personaId: string
	reviewer: string
	summary: string
	issuesCount: number
	noIssue: boolean
	issues: IReviewWithIssues['issues']
}
export function Body({ personaId, reviewer, summary, issuesCount, noIssue, issues }: BodyProps) {
	return <>
		<div className="bg-[#0f1322] border-l-4 border-[#cca352] border-y border-r border-slate-800/60 rounded-r-xl p-5 shadow-lg shadow-black/20">
			<div className="flex items-center gap-2 mb-2">
				<div className="w-2.5 h-2.5 rounded-full bg-[#cca352] animate-pulse" />
				<span className="text-xs font-bold uppercase tracking-wider text-[#cca352]">
					Вердикт: {personaId} ({reviewer})
				</span>
			</div>
			<p className="text-sm italic text-slate-300 leading-relaxed font-medium">
				"{summary}"
			</p>
		</div>

		<div className="space-y-4">
			<h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-2">
				<Terminal className="h-4 w-4 text-slate-500" /> Найдено проблем ({issuesCount || 0})
			</h2>

			{!noIssue ? (
				<IssuesList issues={issues} />
			) : (
				<div className="text-sm text-slate-500 bg-slate-900/20 border border-slate-800 border-dashed rounded-xl p-8 text-center">
					Замечаний нет. Либо код идеален, либо ревьюер подобрел.
				</div>
			)}
		</div>
	</>
}
