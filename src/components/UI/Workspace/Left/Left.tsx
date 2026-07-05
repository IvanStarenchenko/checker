'use client'

import { useState } from 'react'
import { useSettings } from '../hooks/useSettings'
import { Code } from './Code'
import { Footer } from './Footer'
import { Header } from './Header'

export function Left() {
	const { codeLanguage, setCodeLanguage } = useSettings()
	const [code, setCode] = useState('')
	return (
		<div className="flex flex-col h-full bg-[#0b0f19]/40 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
			<Header codeLanguage={codeLanguage} setCodeLanguage={setCodeLanguage} />
			<div className="flex-1 bg-[#070a13] relative min-h-0">
				<Code value={code} onChange={setCode} language={codeLanguage} />
			</div>
			<Footer code={code} />
		</div>
	)
}