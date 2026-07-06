import { analyzeCodeAction } from '@/app/actions/review'
import { useHistoryStore } from '@/store/useHistoryStore'
import { useSettingsStore } from '@/store/useSettingsStore'
import { Search, Shield, Sparkles, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const iconMap: Record<string, any> = {
	'nitpicker-senior': Search,
	'performance-guru': Zap,
	'security-hawk': Shield,
	'clean-code-evangelist': Sparkles,
}
export function useReviewDisplay({ code }: { code: string }) {
	const router = useRouter()
	const [isAnalyzing, setIsAnalyzing] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const { persona, codeLanguage, setPersona } = useSettingsStore()
	const { addHistory } = useHistoryStore()

	const TriggerIcon = iconMap[persona.id] || Search

	async function handleAnalyze() {
		setIsAnalyzing(true)

		const result = await analyzeCodeAction({
			code,
			language: codeLanguage,
			persona: persona,
			filePath: 'untitled.ts'
		})

		setIsAnalyzing(false)

		if (result.success && result.reviewId) {
			router.push(`/workspace?reviewId=${result.reviewId}`)
		} else {
			alert('Что-то пошло не так при анализе')
		}
	}
	return {
		isAnalyzing,
		isOpen,
		setIsOpen,
		TriggerIcon,
		handleAnalyze,
		setPersona,
		persona,
		codeLanguage,
		iconMap,
	}
}
