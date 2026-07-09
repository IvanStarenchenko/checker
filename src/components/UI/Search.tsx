import { Search as SearchIcon } from 'lucide-react'

interface SearchProps {
	placeholder?: string
	type?: string
}

export function Search({ placeholder = "Search files or personas...", type = 'text' }: SearchProps) {
	return (
		<div className="flex items-center gap-2.5 bg-[#070a13]/30 border border-slate-800/80 rounded-lg px-3.5 py-2 w-full max-w-xs focus-within:border-slate-700 transition-colors group">
			<SearchIcon className="h-4 w-4 text-slate-500 shrink-0 group-focus-within:text-slate-400 transition-colors" />
			<input
				type={type}
				placeholder={placeholder}
				className="bg-transparent text-sm text-slate-200 placeholder:text-slate-500/80 outline-none w-full"
			/>
		</div>
	)
}