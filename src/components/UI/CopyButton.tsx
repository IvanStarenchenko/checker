interface CopyButtonProps {
	copy(text: string, id: string): Promise<void>
	codeBefore: string
	codeAfter: string
	copiedId: string | null
}
import { Check, Copy } from 'lucide-react'
export function CopyButton({ copy, codeBefore, codeAfter, copiedId }: CopyButtonProps) {
	const handleCopy = () => {
		if (copiedId === 'before') {
			copy(codeAfter, 'after')
		}
		else {
			copy(codeBefore, 'before')
		}
	}
	return <button
		onClick={handleCopy}
		className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-sans text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
		title="Скопировать исходный код"
	>
		{copiedId === 'before' ? (
			<>
				<Check className="h-3 w-3 text-emerald-400" />
				<span className="text-emerald-400 font-medium">Скопировано!</span>
			</>
		) : (
			<>
				<Copy className="h-3 w-3" />
				<span>Копировать</span>
			</>
		)}
	</button>
}
