import { Code2, History as HistoryIcon } from 'lucide-react'

interface PreviewProps {
	style?: 1 | 2
}

export function Preview({ style }: PreviewProps) {
	switch (style) {
		case 1:
			return (
				<div className="flex flex-col items-center justify-center text-center p-8 max-w-xs mx-auto gap-3.5 my-auto">
					<div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-500">
						<Code2 size={24} />
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="text-sm font-semibold text-slate-200">Awaiting Source Code</h4>
						<p className="text-xs text-slate-500 leading-relaxed">
							Paste a code snippet or select a file in your workspace to trigger a deep AI analysis.
						</p>
					</div>
				</div>
			)
		case 2:
			return (
				<div className="flex flex-col items-center justify-center text-center p-8 max-w-xs mx-auto gap-3.5 my-auto">
					<div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-500">
						<HistoryIcon size={24} />
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="text-sm font-semibold text-slate-200">No Recent Reviews</h4>
						<p className="text-xs text-slate-500 leading-relaxed">
							You haven't run any review sessions yet. Your completed analysis reports will appear here.
						</p>
					</div>
				</div>
			)
		default:
			return null
	}
}