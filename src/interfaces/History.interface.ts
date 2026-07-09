import { IPersona, TCodeLanguage } from './Settings.interface'

export interface IHistoryState {
	id: string
	reviewId: string
	filePath?: string
	Persona: IPersona
	score: number
	language: TCodeLanguage
	date: Date
}
