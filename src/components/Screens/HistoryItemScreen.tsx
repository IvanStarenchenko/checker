import { HistoryItem } from '../UI/History/HistoryItem/HistoryItem'

interface HistoryItemScreenProps {
	id: string
}

export async function HistoryItemScreen({ id }: HistoryItemScreenProps) {
	return (
		<div>
			<HistoryItem id={id} />
		</div>
	)
}