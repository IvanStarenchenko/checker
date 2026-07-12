import { issues } from '@/db/schema'
import { getSeverityStyles } from '@/utils/getSeverityStyles'
import { Sparkles } from 'lucide-react'


interface IssuesListProps {
	issues: typeof issues.$inferSelect[]
}

export function IssuesList({ issues }: IssuesListProps) {
	return (
		<>
			{issues.map((issue) => {
				const styles = getSeverityStyles(issue.severity)
				return (
					<div
						key={issue.id}
						className="bg-slate-900/30 border border-slate-800/60 rounded-xl overflow-hidden backdrop-blur-sm"
					>
						<div className="flex items-center justify-between px-5 py-3 bg-slate-900/50 border-b border-slate-800/40">
							<div className="flex items-center gap-2.5">
								{styles?.icon}
								<span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${styles?.bg}`}>
									{styles?.label}
								</span>
								{issue.lineNumber && (
									<span className="text-xs text-slate-500 font-mono">
										Строка: <span className="text-slate-300 font-bold">{issue.lineNumber}</span>
									</span>
								)}
							</div>
						</div>

						<div className="p-5 space-y-4">
							<div>
								<h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Что не так:</h4>
								<p className="text-sm text-slate-200 leading-relaxed">{issue.message}</p>
							</div>

							<div className="bg-slate-950/80 border border-slate-850 rounded-lg p-4 font-mono text-xs text-slate-300 space-y-2">
								<div className="flex items-center gap-1.5 text-emerald-400 font-sans text-xs font-semibold mb-1">
									<Sparkles className="h-3.5 w-3.5" />
									<span>Решение от Синьора:</span>
								</div>
								<pre className="whitespace-pre-wrap text-slate-400 bg-slate-900/50 p-3 rounded border border-slate-800/40 overflow-x-auto">
									<code>{issue.suggestion}</code>
								</pre>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
