'use client'

import { issues, reviews } from '@/db/schema'
import { IHistoryState } from '@/interfaces/History.interface'
import { IPersona, TCodeLanguage } from '@/interfaces/Settings.interface'
import { AlertTriangle, Lightbulb, ShieldAlert, Terminal } from 'lucide-react'
import { useEffect } from 'react'

interface ReviewProps {
	reviewId?: string
	review?: typeof reviews.$inferSelect | null
	detectedIssues?: typeof issues.$inferSelect[]
	persona: IPersona
	addHistory: (historyItem: IHistoryState) => void
}

export function ReviewDisplay({ reviewId, review, detectedIssues, persona, addHistory }: ReviewProps) {

	useEffect(() => {
		if (reviewId && review) {
			addHistory({
				id: reviewId,
				filePath: review.filePath,
				Persona: persona,
				score: review.score,
				language: review.language as TCodeLanguage,
				date: new Date()
			})
		}
	}, [reviewId, review, persona, addHistory])

	if (!reviewId) {
		return (
			<div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
				<div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800/50 text-slate-500 mb-4">
					<Terminal size={32} />
				</div>
				<h3 className="text-sm font-semibold text-slate-200 mb-1">Awaiting Source Code</h3>
				<p className="text-xs text-slate-400 max-w-xs leading-relaxed">
					Paste a code snippet or select a file in your workspace to trigger a deep AI analysis.
				</p>
			</div>
		)
	}

	if (!review) {
		return (
			<div className="flex items-center justify-center flex-1 text-xs text-slate-500 font-mono">
				Review not found
			</div>
		)
	}

	return (
		<div className="flex flex-col flex-1 min-h-0 ">
			<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60 bg-[#0d1321]/20">
				<span className="text-xs font-semibold text-slate-300">AI Review Insights</span>
				<span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold">
					Score: {review.score}/100
				</span>
			</div>

			<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
				<div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-xl">
					<h4 className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Summary</h4>
					<p className="text-xs text-slate-300 leading-relaxed break-words whitespace-pre-wrap">{review.summary}</p>
				</div>

				<div className="flex flex-col gap-3">
					<h4 className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
						Detected Issues ({detectedIssues?.length ?? 0})
					</h4>

					{(detectedIssues?.length ?? 0) === 0 ? (
						<div className="text-xs text-slate-500 font-mono py-8 text-center">
							Perfect! No issues found by this persona.
						</div>
					) : (
						detectedIssues?.map((issue) => {
							const isCritical = issue.severity === 'critical'
							const isWarning = issue.severity === 'warning'

							return (
								<div
									key={issue.id}
									className={`p-3.5 border rounded-xl flex flex-col gap-2.5 bg-slate-950/20 ${isCritical ? 'border-red-950/60' : isWarning ? 'border-amber-500/60' : 'border-slate-800/60'
										}`}
								>
									<div className="flex items-start justify-between gap-4">
										<div className="flex items-center gap-2">
											{isCritical && <ShieldAlert size={14} className="text-red-500" />}
											{isWarning && <AlertTriangle size={14} className="text-amber-500" />}
											{!isCritical && !isWarning && <Lightbulb size={14} className="text-blue-400" />}

											<span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${isCritical ? 'text-red-400' : isWarning ? 'text-amber-400' : 'text-blue-400'
												}`}>
												{issue.severity}
											</span>
										</div>

										{issue.lineNumber && (
											<span className="text-[10px] font-mono text-slate-500 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800/40">
												Line {issue.lineNumber}
											</span>
										)}
									</div>

									<p className="text-xs text-slate-300 leading-relaxed break-words whitespace-pre-wrap">{issue.message}</p>

									{issue.suggestion && (
										<div className="mt-1">
											<span className="text-[10px] font-mono text-slate-500 block mb-1">Suggested Fix:</span>
											<pre className="p-2.5 bg-[#070a13] border border-slate-800/60 rounded-lg text-xs font-mono text-slate-400 whitespace-pre-wrap break-words">
												{issue.suggestion}
											</pre>
										</div>
									)}
								</div>
							)
						})
					)}
				</div>
			</div>
		</div>
	)
}