
interface HistoryItemProps {
	id: string
}
export function NoReview({ id }: HistoryItemProps) {
	return (
		<div className="text-rose-500 p-6 font-medium bg-rose-500/5 border border-rose-500/20 rounded-xl">
			Ревью с ID {id} не найдено в базе данных
		</div>
	)
}
