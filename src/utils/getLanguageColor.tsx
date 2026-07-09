import { LANGUAGES } from '@/Data/Languages.data'

export const getLanguageColor = (languageName?: string) => {
	if (!languageName) return '#94a3b8'
	return (
		LANGUAGES.find(
			(lang) => lang.name.trim().toLowerCase() === languageName.trim().toLowerCase()
		)?.color ?? '#94a3b8'
	)
}