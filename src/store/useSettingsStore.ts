import { PERSONAS } from '@/Data/Personas.data'
import {
	ILanguages,
	IPersona,
	TCodeLanguage
} from '@/interfaces/Settings.interface'
import { create } from 'zustand'

interface SettingsState {
	codeLanguage: TCodeLanguage
	persona: IPersona
	setCodeLanguage: (language: ILanguages) => void
	setPersona: (persona: IPersona) => void
}

export const useSettingsStore = create<SettingsState>(set => ({
	codeLanguage: 'JavaScript',
	persona: PERSONAS[0],
	setCodeLanguage: (language: ILanguages) =>
		set({ codeLanguage: language.name }),
	setPersona: (persona: IPersona) => set({ persona })
}))
