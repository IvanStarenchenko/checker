import { HistoryList } from "@/components/UI/History"
import { HistoryIcon } from 'lucide-react'
import { SectionTitle } from '../../SectionTitle'

export function DashboardHistory() {
	return <div>
		<SectionTitle icon={HistoryIcon} name="History" />
		<HistoryList count={5} />
	</div>
}
