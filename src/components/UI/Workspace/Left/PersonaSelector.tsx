import { IPersona } from '@/interfaces/Settings.interface'
import { Search } from 'lucide-react'

interface PersonaSelectorProps {
	iconMap: Record<string, any>
	PERSONAS: IPersona[]
	persona?: IPersona
	setPersona: (persona: IPersona) => void
	setIsOpen: (isOpen: boolean) => void
}
export function PersonaSelector({ iconMap, PERSONAS, persona, setPersona, setIsOpen }: PersonaSelectorProps) {
	return (
		<>
			<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
			<div className="absolute bottom-full left-0 mb-2 w-77.5 bg-[#0b0f19] border border-slate-800/90 rounded-xl p-1.5 flex flex-col gap-0.5 shadow-2xl z-50">
				{PERSONAS.map(p => {
					const Icon = iconMap[p.id] || Search
					return (
						<button
							key={p.id}
							onClick={() => {
								setPersona(p)
								setIsOpen(false)
							}}
							className={`flex gap-3 p-2.5 rounded-lg text-left transition-colors cursor-pointer w-full border border-transparent ${persona?.id === p.id ? 'bg-slate-800/40 border-slate-800/60' : 'hover:bg-slate-900/60'
								}`}
						>
							<div className="mt-0.5 shrink-0"><Icon size={14} style={{ color: p.color }} /></div>
							<div className="flex flex-col gap-0.5">
								<span className="text-xs font-semibold" style={{ color: p.color }}>{p.name}</span>
								<span className="text-[11px] text-slate-400 whitespace-normal">{p.description}</span>
							</div>
						</button>
					)
				})}
			</div>
		</>
	)
}
