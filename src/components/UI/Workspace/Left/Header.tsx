'use client'
import { LANGUAGES } from '@/Data/Languages.data'
import { ILanguages } from '@/interfaces/Settings.interface'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
interface HeaderProps {
	fileName?: string
	codeLanguage?: string
	setCodeLanguage?: (language: ILanguages) => void
}

export function Header({ fileName, codeLanguage, setCodeLanguage }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false)


	const selectedLang = LANGUAGES.find(lang => lang.name === codeLanguage) || LANGUAGES[0]

	return (
		<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60 bg-[#0d1321]/20 relative">
			<div className="flex items-center gap-2">
				<span className="w-3 h-3 rounded-full bg-rose-500/70" />
				<span className="w-3 h-3 rounded-full bg-amber-500/70" />
				<span className="w-3 h-3 rounded-full bg-emerald-500/70" />
				<span className="font-mono text-xs font-medium ml-3 text-slate-400">
					{fileName || "Not Titled"}
				</span>
			</div>

			<div className="relative">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-2 bg-[var(--light-bright)] border border-slate-800/80 rounded-lg px-2.5 py-1 text-xs outline-none cursor-pointer hover:border-slate-700 transition-colors"
					style={{ color: selectedLang.color }}
				>
					<span className="font-mono lowercase">{selectedLang.name}</span>
					<ChevronDown
						size={12}
						className={`text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
					/>
				</button>

				{isOpen && (
					<>
						<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

						<div className="absolute right-0 top-full mt-1.5 w-36 bg-[#0b0f19] border border-slate-800/90 rounded-xl p-1 flex flex-col gap-0.5 shadow-2xl z-50">
							{LANGUAGES.map(language => (
								<button
									key={language.value}
									onClick={() => {
										setCodeLanguage && setCodeLanguage(language)
										setIsOpen(false)
									}}
									className={`w-full text-left px-2.5 py-1.5 text-xs font-mono lowercase rounded-lg transition-colors border border-transparent cursor-pointer ${selectedLang.value === language.value
										? 'bg-slate-800/40 border-slate-800/30'
										: 'hover:bg-slate-900/60'
										}`}
									style={{ color: language.color }}
								>
									{language.name}
								</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}