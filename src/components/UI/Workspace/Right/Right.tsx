import { Header } from './Header'
import { ReviewDisplay } from './ReviewDisplay'


interface RightProps {
	reviewId?: string
}

export function Right({ reviewId }: RightProps) {
	return (
		<div className="flex flex-col h-full bg-[#0b0f19]/40 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
			<Header />
			<div className="flex-1 bg-[#070a13]/60 flex flex-col min-h-0">
				<ReviewDisplay reviewId={reviewId} />
			</div>
		</div>
	)
}