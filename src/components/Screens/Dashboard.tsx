import { LayoutDashboard } from 'lucide-react'
import { DashboardChart } from '../UI/Dashboard/DashboardChart/DashboardChart'
import { DashboardHistory } from '../UI/Dashboard/DashboardHistory/DashboardHistory'
import { DashboardTop } from '../UI/Dashboard/DashboardTop/DashboardTop'
import { SectionTitle } from '../UI/SectionTitle'
export function Dashboard() {
	return <main>
		<SectionTitle icon={LayoutDashboard} name="Dashboard" />
		<div className="flex flex-col gap-y-[50px]">
			<DashboardTop />
			<DashboardChart />
			<DashboardHistory />
		</div >
	</main >
}
