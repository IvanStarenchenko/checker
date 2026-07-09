import { issues, reviews } from '@/db/schema'

export type TReview = typeof reviews.$inferSelect
export type TIssue = typeof issues.$inferSelect

export interface IReviewWithIssues extends TReview {
	issues: TIssue[]
}
