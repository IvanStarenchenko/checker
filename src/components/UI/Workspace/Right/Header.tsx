import { Bot } from 'lucide-react'

export function Header() {
	return (
		<div className="flex items-center gap-2 px-4 py-[15px] border-b border-slate-800/60 bg-[#0d1321]/20">
			<Bot size={16} className="text-blue-400" />
			<span className="text-xs font-medium text-slate-400 tracking-wide">
				AI Review Insights
			</span>
		</div>
	)
}