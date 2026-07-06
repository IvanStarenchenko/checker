import { issues, reviews } from '@/db/schema'
import { ChevronsLeftRightEllipsis } from 'lucide-react'
import { SectionTitle } from '../UI/SectionTitle'
import { Left } from '../UI/Workspace/Left/Left'
import { Right } from '../UI/Workspace/Right/Right'

interface WorkspaceProps {
	reviewId?: string
	review?: typeof reviews.$inferSelect | null
	issues?: typeof issues.$inferSelect[]
}

export function Workspace({ reviewId, review, issues }: WorkspaceProps) {
	return (
		<div className="flex flex-col h-[calc(100vh-64px)] w-full pb-4">
			<div className="mb-4 shrink-0">
				<SectionTitle icon={ChevronsLeftRightEllipsis} name="Workspace" />
			</div>

			<div className="grid grid-cols-[1fr_340px] gap-4 flex-1 min-h-0">
				<Left />
				<Right reviewId={reviewId} review={review} issues={issues} />
			</div>
		</div>
	)
}