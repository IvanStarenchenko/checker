import { useSettingsStore } from '@/store/useSettingsStore'

export function useSettings() {
	const { codeLanguage, setCodeLanguage, persona, setPersona } = useSettingsStore()



	return {

		codeLanguage,
		setCodeLanguage,

		persona,
		setPersona
	}
}
