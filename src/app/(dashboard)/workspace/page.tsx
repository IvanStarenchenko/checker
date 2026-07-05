
import { Workspace } from '@/components/Screens/Workspace'



interface PageProps {
	searchParams: Promise<{ reviewId?: string }>
}

export default async function WorkspacePage({ searchParams }: PageProps) {
	const { reviewId } = await searchParams

	return <Workspace reviewId={reviewId} />
}