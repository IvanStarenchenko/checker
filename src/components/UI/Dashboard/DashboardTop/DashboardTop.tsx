import { BadgeAlert, Code, Terminal, TrendingUp } from 'lucide-react'
import { DashboardInfo } from './DashboardInfo'
export function DashboardTop() {
	return <div className="grid grid-cols-4 gap-4">
		<DashboardInfo name="Top Reviews" icon={Code} color="blue" />
		<DashboardInfo name="Avg. Quality Score" icon={TrendingUp} color="green" />
		<DashboardInfo name="Critical Issues" icon={BadgeAlert} color="red" />
		<DashboardInfo name="Files Reviewed" icon={Terminal} color="yellow" />
	</div>
}
