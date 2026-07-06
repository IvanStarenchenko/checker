import { IPersona, TCodeLanguage } from './Settings.interface'

export interface AnalyzeInput {
	code: string
	language: TCodeLanguage
	persona: IPersona
	filePath?: string
}
