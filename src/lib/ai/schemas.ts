import { z } from 'zod'

export const reviewOutputSchema = z.object({
	score: z.number().min(1).max(100),
	summary: z.string(),
	codeAfter: z
		.string()
		.describe('Refactored or improved version of the entire code snippet'),
	issues: z.array(
		z.object({
			severity: z.enum(['critical', 'warning', 'suggestion']),
			lineNumber: z
				.number()
				.nullable()
				.describe('Line number where the issue occurs, or null if general'),
			message: z.string().describe('Clear explanation of what is wrong'),
			suggestion: z.string().describe('Code example or fix recommendation')
		})
	)
})

export type ReviewOutput = z.infer<typeof reviewOutputSchema>
