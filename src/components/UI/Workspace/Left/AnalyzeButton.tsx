import { Sparkles } from 'lucide-react'

export function AnalyzeButton({ handleAnalyze, isAnalyzing }: { handleAnalyze: () => void, isAnalyzing: boolean }) {
	return <button
		onClick={handleAnalyze}
		disabled={isAnalyzing}
		className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-lg active:scale-[0.98]"
	>
		{isAnalyzing ? (
			<span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
		) : (
			<Sparkles size={14} />
		)}
		<span>{isAnalyzing ? 'Analyzing...' : 'Analyze Code'}</span>
	</button>
}
