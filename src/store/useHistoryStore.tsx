
import { IHistoryState } from '@/interfaces/History.interface'
import { create } from 'zustand'

interface HistoryState {
	history: IHistoryState[]
	addHistory: (historyItem: IHistoryState) => void
}

export const useHistoryStore = create<HistoryState>(set => ({
	history: [],
	addHistory: (historyItem: IHistoryState) =>
		set(state => ({ history: [...state.history, historyItem] }))
}))
