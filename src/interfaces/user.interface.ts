export type Plan = 'Free' | 'Pro' | 'Enterprise'
export interface User {
	id: string
	name: string
	email: string
	plan: Plan
}
