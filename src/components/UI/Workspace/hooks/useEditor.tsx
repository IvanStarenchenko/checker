import { Monaco } from '@monaco-editor/react'
import { useState } from 'react'

export function useEditor() {
	const [isThemeReady, setIsThemeReady] = useState(false)

	function handleEditorBeforeMount(monaco: Monaco) {
		monaco.editor.defineTheme('code-gaze-theme', {
			base: 'vs-dark',
			inherit: true,
			rules: [],
			colors: {
				'editor.background': '#070a13',
				'editor.lineHighlightBackground': '#00000000',
				'editorGutter.background': '#070a13',
			},
		})
		setIsThemeReady(true)
	}

	return { isThemeReady, handleEditorBeforeMount }
}
