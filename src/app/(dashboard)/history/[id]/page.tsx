import { HistoryItemScreen } from '@/components/Screens/HistoryItemScreen'

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
	const { id } = await params

	return (
		<div>
			<HistoryItemScreen id={id} />
		</div>
	)
}