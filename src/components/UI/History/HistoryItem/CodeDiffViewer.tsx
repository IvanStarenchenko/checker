"use client"

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useState } from 'react'
import { CopyButton } from '../../CopyButton'

interface CodeDiffViewerProps {
	codeBefore: string
	codeAfter: string
}

export function CodeDiffViewer({ codeBefore, codeAfter }: CodeDiffViewerProps) {
	const [activeSide, setActiveSide] = useState<'before' | 'after'>('before')
	const { copiedId, copy } = useCopyToClipboard()

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

							<CopyButton copy={copy} codeBefore={codeBefore} codeAfter={codeAfter} copiedId={copiedId} />
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
				<div className={`px-4 py-2.5 bg-emerald-500/5 border-b border-slate-800 flex items-center transition-all ${activeSide === 'after' ? 'justify-between' : 'justify-center py-4'
					}`}>
					{activeSide === 'after' && (
						<div className="flex items-center justify-between w-full">
							<span className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
								Стало (После правок)
							</span>

							<CopyButton copy={copy} codeBefore={codeBefore} codeAfter={codeAfter} copiedId={copiedId} />
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