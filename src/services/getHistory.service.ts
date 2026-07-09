// src/services/history.service.ts
import { PERSONAS } from '@/Data/Personas.data'
import { db } from '@/db'
import { history as historyTable } from '@/db/schema'
import type { IHistoryState } from '@/interfaces/History.interface'
import { desc } from 'drizzle-orm'

export async function getHistory(count: number = 5) {
	const rawHistory = await db
		.select()
		.from(historyTable)
		.orderBy(desc(historyTable.createdAt))
		.limit(count)

	const historyList: IHistoryState[] = rawHistory.map(item => {
		let cleanPersonaId = item.personaId

		if (cleanPersonaId.startsWith('{')) {
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

	return { historyList }
}
