import { useCallback, useState } from 'react'

export function useCopyToClipboard(duration = 2000) {
	const [copiedId, setCopiedId] = useState<string | null>(null)

	const copy = useCallback(async (text: string, id: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setCopiedId(id)
			setTimeout(() => setCopiedId(null), duration)
		} catch (err) {
			console.error('Не удалось скопировать текст в буфер обмена:', err)
		}
	}, [duration])

	return { copiedId, copy }
}