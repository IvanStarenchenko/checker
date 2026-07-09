import { IHistoryState } from '@/interfaces/History.interface'

export const getChartData = (historyList: IHistoryState[]) => {
	const localData = historyList?.[0]?.date
		? new Date(historyList[0].date).toLocaleDateString()
		: 'N/A'
	const firstHistoryEntryDateString = historyList?.[0]?.date ? localData : 'N/A'

	const chartData = historyList?.map(item => ({
		date: item.date ? localData : 'N/A',
		score: item.score,
		persona: item.Persona.name,
		color: item.Persona.color
	}))
	return { chartData, firstHistoryEntryDateString }
}
