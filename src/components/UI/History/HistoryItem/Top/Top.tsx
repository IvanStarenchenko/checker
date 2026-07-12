import { TCodeLanguage } from '@/interfaces/Settings.interface'
import { getLanguageColor } from '@/utils/getLanguageColor'
import { ScoreCircle } from '@/utils/ScoreCircle'
import {
	Calendar,
	FileCode
} from 'lucide-react'

interface TopProps {
	score: number
	language: TCodeLanguage
	createdAt: string
	filePath: string
}
export function Top({ score, language, createdAt, filePath }: TopProps) {
	return <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
		<div className="flex items-center gap-4">
			<ScoreCircle score={score} size={36} />
			<div>
				<div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-1">
					<span
						className={`px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md`}
						style={{ color: getLanguageColor(language) }}
					>
						{language}
					</span>
					{createdAt && (
						<span className="flex items-center gap-1">
							<Calendar className="h-3 w-3" /> {new Date(createdAt).toLocaleDateString()}
						</span>
					)}
				</div>
				<h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 break-all">
					<FileCode className="h-5 w-5 text-sky-400 shrink-0" />
					{filePath}
				</h1>
			</div>
		</div>
	</div>
}
