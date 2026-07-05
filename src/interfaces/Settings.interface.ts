export interface IPersona {
	id: string
	name: string
	role: string
	description: string
	color: string
	prompt: string
}

export type TCodeLanguage =
	| 'JavaScript'
	| 'TypeScript'
	| 'Python'
	| 'Java'
	| 'C++'
	| 'C#'
	| 'Go'
	| 'Ruby'

export interface ILanguages {
	name: TCodeLanguage
	value: string
	color: string
}
