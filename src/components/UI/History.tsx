'use client'
import { data } from "@/Data/Chart.data"
import { LANGUAGES } from '@/Data/Languages.data'
import { ScoreCircle } from '@/helpers/ScoreCircle'
import { useHistoryStore } from '@/store/useHistoryStore'
import Link from "next/link"

interface HistoryProps {
	count?: number
}

export function History({ count = data.length }: HistoryProps) {
	const { history } = useHistoryStore()
	const getLanguageColor = (languageName?: string) => {
		if (!languageName) return '#94a3b8'
		return (
			LANGUAGES.find(
				(lang) => lang.name.trim().toLowerCase() === languageName.trim().toLowerCase()
			)?.color ?? '#94a3b8'
		)
	}

	const getPersonaColor = (color?: string) => color || '#94a3b8'

	return (
		<div className="w-full bg-(--light-bright) border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">

			<div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
				<h3 className="text-sm font-semibold text-white tracking-tight">
					Recent Reviews
				</h3>
				<Link
					href="/history"
					className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
				>
					View all <span className="text-[10px]">&gt;</span>
				</Link>
			</div>

			<div className="px-6 pb-2">
				<div className="grid grid-cols-12 py-3 text-xs font-semibold text-slate-500 tracking-wider">
					<div className="col-span-4">File</div>
					<div className="col-span-3">Persona</div>
					<div className="col-span-2">Language</div>
					<div className="col-span-2 text-center">Score</div>
					<div className="col-span-1 text-right">Date</div>
				</div>

				<div className="divide-y divide-slate-800/60">
					{history.slice(0, count).map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-12 items-center py-4 hover:bg-slate-850/20 transition-colors group"
						>
							<div className="col-span-4 pr-4">
								<span className="font-mono text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors break-all">
									{item.filePath}
								</span>
							</div>

							<div className="col-span-3" style={{ color: getPersonaColor(item.Persona?.color) }}>
								<span className="text-sm ">
									{item.Persona.name}
								</span>
							</div>
							<div className="col-span-2" style={{ color: getLanguageColor(item.language) }}>
								<span className="text-sm ">
									{item.language}
								</span>
							</div>

							<div className="col-span-2 flex justify-center">
								<ScoreCircle score={item.score} />
							</div>

							<div className="col-span-1 text-right">
								<span className="font-mono text-xs text-slate-500">
									{item.date.toLocaleDateString()}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}