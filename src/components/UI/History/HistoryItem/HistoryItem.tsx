import { getHistory } from '@/services/getHistory.service'
import { getReview } from '@/services/getReview.service'
import { getLanguageColor } from '@/utils/getLanguageColor'
import { getSeverityStyles } from '@/utils/getSeverityStyles'
import { ScoreCircle } from '@/utils/ScoreCircle'
import {
	Calendar,
	FileCode,
	Sparkles,
	Terminal
} from 'lucide-react'
import { CodeDiffViewer } from './CodeDiffViewer'
import { NoReview } from './NoReview'
interface HistoryItemProps {
	id: string
}

export async function HistoryItem({ id }: HistoryItemProps) {
	const review = await getReview(id)

	if (!review) {
		return <NoReview id={id} />
	}
	const { historyList } = await getHistory(1)
	const personaData = historyList.find(item => item.reviewId === id)?.Persona
	const reviewer = personaData ? personaData.name : 'Unknown Persona'
	return (
		<div className="text-slate-200 font-sans space-y-6 max-w-6xl mx-auto p-4">

			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
				<div className="flex items-center gap-4">
					<ScoreCircle score={review.score} size={36} />
					<div>
						<div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-1">
							<span
								className={`px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md`}
								style={{ color: getLanguageColor(review.language) }}
							>
								{review.language}
							</span>
							{review.createdAt && (
								<span className="flex items-center gap-1">
									<Calendar className="h-3 w-3" /> {new Date(review.createdAt).toLocaleDateString()}
								</span>
							)}
						</div>
						<h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 break-all">
							<FileCode className="h-5 w-5 text-sky-400 shrink-0" />
							{review.filePath}
						</h1>
					</div>
				</div>
			</div>

			<div className="bg-[#0f1322] border-l-4 border-[#cca352] border-y border-r border-slate-800/60 rounded-r-xl p-5 shadow-lg shadow-black/20">
				<div className="flex items-center gap-2 mb-2">
					<div className="w-2.5 h-2.5 rounded-full bg-[#cca352] animate-pulse" />
					<span className="text-xs font-bold uppercase tracking-wider text-[#cca352]">
						Вердикт: {review.personaId} ({reviewer})
					</span>
				</div>
				<p className="text-sm italic text-slate-300 leading-relaxed font-medium">
					"{review.summary}"
				</p>
			</div>

			<div className="space-y-4">
				<h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-2">
					<Terminal className="h-4 w-4 text-slate-500" /> Найдено проблем ({review.issues?.length || 0})
				</h2>

				{review.issues?.length > 0 ? (
					review.issues.map((issue) => {
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
					})
				) : (
					<div className="text-sm text-slate-500 bg-slate-900/20 border border-slate-800 border-dashed rounded-xl p-8 text-center">
						Замечаний нет. Либо код идеален, либо Синьор подобрел.
					</div>
				)}
			</div>

			<CodeDiffViewer
				codeBefore={review.codeBefore}
				codeAfter={review.codeAfter}
			/>

		</div>
	)
}