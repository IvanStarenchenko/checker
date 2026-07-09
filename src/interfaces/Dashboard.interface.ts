import { history } from '@/db/schema'
import { IPersona } from '@/interfaces/Settings.interface'

export type THistoryItem = typeof history.$inferSelect

export interface IHistoryWithPersona extends THistoryItem {
	Persona: IPersona
}

export interface IDashboardStats {
	totalReviews: number
	averageScore: number
	lowScoreReviewCount: number
	sortedReviews: IHistoryWithPersona[]
	topReviewScore: string
	topReviewFile: string
	MINIMUM_PASSING_SCORE: number
	totalScorePerMonth: number
	MAX_SCORE: number
}
