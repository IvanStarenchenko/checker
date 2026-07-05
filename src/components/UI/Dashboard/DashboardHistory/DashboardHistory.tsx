import { History } from "@/components/UI/History"
import { HistoryIcon } from 'lucide-react'
import { SectionTitle } from '../../SectionTitle'

export function DashboardHistory() {
	return <div>
		<SectionTitle icon={HistoryIcon} name="History" />
		<History count={5} />
	</div>
}
