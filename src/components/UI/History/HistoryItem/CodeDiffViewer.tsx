"use client"

import { Check, Copy } from 'lucide-react'
import React, { useState } from 'react'

interface CodeDiffViewerProps {
	codeBefore: string
	codeAfter: string
}

export function CodeDiffViewer({ codeBefore, codeAfter }: CodeDiffViewerProps) {
	const [activeSide, setActiveSide] = useState<'before' | 'after'>('before')
	const [copiedSide, setCopiedSide] = useState<'before' | 'after' | null>(null)

	const handleCopy = async (e: React.MouseEvent, code: string, side: 'before' | 'after') => {
		e.stopPropagation()
		try {
			await navigator.clipboard.writeText(code)
			setCopiedSide(side)
			setTimeout(() => setCopiedSide(null), 2000)
		} catch (err) {
			console.error('Не удалось скопировать код:', err)
		}
	}

	return (
		<div className="flex gap-4 pt-4 w-full min-h-[600px] select-none items-stretch">

			<div
				onClick={() => setActiveSide('before')}
				style={{ width: activeSide === 'before' ? '95%' : '5%' }}
				className={`bg-slate-900/20 border border-slate-800/80 rounded-xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out origin-left ${activeSide === 'after'
						? 'cursor-pointer hover:border-rose-500/30 hover:bg-rose-500/[0.02]'
						: ''
					}`}
			>
				<div className={`px-4 py-2.5 bg-rose-500/5 border-b border-slate-800 flex items-center transition-all ${activeSide === 'before' ? 'justify-between' : 'justify-center py-4'
					}`}>
					{activeSide === 'before' && (
						<div className="flex items-center justify-between w-full">
							<span className="text-xs font-semibold text-rose-400 font-mono tracking-wider">
								Было (До ревью)
							</span>

							<button
								onClick={(e) => handleCopy(e, codeBefore, 'before')}
								className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-sans text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
								title="Скопировать исходный код"
							>
								{copiedSide === 'before' ? (
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
						</div>
					)}
					{activeSide === 'after' && (
						<div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 animate-pulse scale-125" />
					)}
				</div>

				<div className={`p-4 font-mono text-[11px] leading-relaxed text-slate-400 bg-slate-950/40 flex-1 overflow-auto transition-all duration-300 ${activeSide === 'before' ? 'opacity-100' : 'opacity-0 pointer-events-none overflow-hidden'
					}`}>
					<pre className="whitespace-pre">
						<code>{codeBefore}</code>
					</pre>
				</div>
			</div>

			<div
				onClick={() => setActiveSide('after')}
				style={{ width: activeSide === 'after' ? '95%' : '5%' }}
				className={`bg-slate-900/20 border border-slate-800/80 rounded-xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out origin-right ${activeSide === 'before'
						? 'cursor-pointer hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]'
						: ''
					}`}
			>
				{/* Шапка */}
				<div className={`px-4 py-2.5 bg-emerald-500/5 border-b border-slate-800 flex items-center transition-all ${activeSide === 'after' ? 'justify-between' : 'justify-center py-4'
					}`}>
					{activeSide === 'after' && (
						<div className="flex items-center justify-between w-full">
							<span className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
								Стало (После правок)
							</span>

							<button
								onClick={(e) => handleCopy(e, codeAfter, 'after')}
								className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-sans text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
								title="Скопировать исправленный код"
							>
								{copiedSide === 'after' ? (
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
						</div>
					)}
					{activeSide === 'before' && (
						<div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse scale-125" />
					)}
				</div>

				<div className={`p-4 font-mono text-[11px] leading-relaxed text-slate-300 bg-slate-950/60 flex-1 overflow-auto transition-all duration-300 ${activeSide === 'after' ? 'opacity-100' : 'opacity-0 pointer-events-none overflow-hidden'
					}`}>
					<pre className="whitespace-pre">
						<code>{codeAfter}</code>
					</pre>
				</div>
			</div>

		</div>
	)
}