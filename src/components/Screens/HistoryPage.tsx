import { History as HistoryIcon } from 'lucide-react'
import { HistoryList } from '../UI/History'
import { Search } from '../UI/Search'
import { SectionTitle } from '../UI/SectionTitle'

export function History() {

	return <div className="flex flex-col gap-10">
		<div className="flex items-center justify-between">
			<SectionTitle name="History" icon={HistoryIcon} />
			<Search />
		</div>
		<HistoryList isHat={false} count={100} />
	</div>
}
