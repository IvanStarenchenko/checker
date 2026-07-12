import { PERSONAS } from '@/Data/Personas.data'
import { db } from '@/db'
import { history as historyTable } from '@/db/schema'
import type { IHistoryState } from '@/interfaces/History.interface'
import { desc, eq } from 'drizzle-orm'

interface GetHistoryParams {
	id?: string
	count?: number
}

export async function getHistory({ id, count = 5 }: GetHistoryParams = {}) {
	let query = db.select().from(historyTable)

	if (id) {
		// @ts-ignore
		query = query.where(eq(historyTable.reviewId, id))
	} else {
		// @ts-ignore
		query = query.orderBy(desc(historyTable.createdAt)).limit(count)
	}

	const rawHistory = await query

	const historyList: IHistoryState[] = rawHistory.map(item => {
		let cleanPersonaId = item.personaId

		if (cleanPersonaId && cleanPersonaId.startsWith('{')) {
			try {
				const parsed = JSON.parse(cleanPersonaId)
				cleanPersonaId = parsed.id || cleanPersonaId
			} catch (e) {
				console.error('Failed to parse corrupted personaId JSON:', e)
			}
		}

		const personaData = PERSONAS.find(p => p.id === cleanPersonaId) ?? {
			id: 'unknown',
			name: 'Unknown Persona',
			color: '#94a3b8',
			role: 'Unknown',
			description: 'Fallback persona for missing or corrupted personaId.',
			prompt: ''
		}

		return {
			...item,
			personaId: cleanPersonaId,
			Persona: personaData
		}
	})

	const targetItem = id ? historyList.find(item => item.reviewId === id) : null

	const reviewer = targetItem?.Persona?.name ?? 'Unknown Persona'

	return { historyList, reviewer }
}
