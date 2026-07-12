import { PATH } from '@/Const/path.const'
import { getHistory } from '@/services/getHistory.service'
import { getLanguageColor } from '@/utils/getLanguageColor'
import { ScoreCircle } from '@/utils/ScoreCircle'
import Link from "next/link"
interface HistoryProps {
	count?: number
	isHat?: boolean
}

export async function HistoryList({ count = 5, isHat = true }: HistoryProps) {
	const { historyList } = await getHistory({ count })
	if (!historyList || historyList.length === 0) {
		return (
			<div className="w-full bg-[var(--light-bright)] border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
				<div className="px-6 py-4 text-sm text-slate-500">
					No history found.
				</div>
			</div>
		)
	}
	return (
		<div className="w-full bg-[var(--light-bright)] border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
			{isHat && (
				<div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
					<h3 className="text-sm font-semibold text-white tracking-tight">
						Recent Reviews
					</h3>
					<Link
						href={PATH.HISTORY}
						className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
					>
						View all <span className="text-[10px]">&gt;</span>
					</Link>
				</div>
			)}


			<div className="px-6 pb-2">
				<div className="grid grid-cols-12 py-3 text-xs font-semibold text-slate-500 tracking-wider">
					<div className="col-span-4">File</div>
					<div className="col-span-3">Persona</div>
					<div className="col-span-2">Language</div>
					<div className="col-span-2 text-center">Score</div>
					<div className="col-span-1 text-right">Date</div>
				</div>

				<div className="divide-y divide-slate-800/60">
					{historyList.map((item) => (
						<Link
							key={item.id}
							className="grid grid-cols-12 items-center py-4 hover:bg-slate-850/20 transition-colors group cursor-pointer"
							href={`${PATH.HISTORY}/${item.reviewId}`}
						>
							<div className="col-span-4 pr-4">
								<span className="font-mono text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors break-all">
									{item.filePath}
								</span>
							</div>

							<div className="col-span-3" style={{ color: item.Persona.color }}>
								<span className="text-sm">
									{item.Persona.name}
								</span>
							</div>

							<div className="col-span-2" style={{ color: getLanguageColor(item.language) }}>
								<span className="text-sm">
									{item.language}
								</span>
							</div>

							<div className="col-span-2 flex justify-center">
								<ScoreCircle score={item.score} size={36} />
							</div>

							<div className="col-span-1 text-right">
								<span className="font-mono text-xs text-slate-500">
									{item.date.toLocaleDateString()}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}