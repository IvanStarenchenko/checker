"use client"

import Editor from '@monaco-editor/react'
import { useEditor } from '../hooks/useEditor'

interface CodeProps {
	value: string | null
	onChange: (value: string) => void
	language: string
}

export function Code({ value, onChange, language }: CodeProps) {
	const { isThemeReady, handleEditorBeforeMount } = useEditor()

	return (
		<div className="absolute inset-4 rounded-lg overflow-hidden bg-[#070a13]">
			<Editor
				height="100%"
				language={language.toLowerCase()}
				theme={isThemeReady ? 'code-gaze-theme' : 'vs-dark'}
				value={value ?? ''}
				onChange={onChange as (value: string | undefined) => void}
				beforeMount={handleEditorBeforeMount}
				options={{
					fontSize: 13,
					fontFamily: 'var(--font-mono), monospace',
					minimap: { enabled: false },
					lineNumbers: 'on',
					roundedSelection: false,
					scrollBeyondLastLine: false,
					readOnly: false,
					automaticLayout: true,
					padding: { top: 16, bottom: 16 },
					hideCursorInOverviewRuler: true,
					overviewRulerBorder: false,
					scrollbar: {
						vertical: 'visible',
						horizontal: 'visible',
						useShadows: false,
						verticalScrollbarSize: 8,
						horizontalScrollbarSize: 8
					}
				}}
				loading={
					<div className="flex h-full items-center justify-center text-xs text-slate-500 font-mono bg-[#070a13]">
						Loading editor...
					</div>
				}
			/>
		</div>
	)
}