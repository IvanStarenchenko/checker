import { getDashboardStatistics } from '@/services/getDashboardStatistics.service'
import { getHistory } from '@/services/getHistory.service'
import { LayoutDashboard } from 'lucide-react'
import { DashboardChart } from '../UI/Dashboard/DashboardChart/DashboardChart'
import { DashboardHistory } from '../UI/Dashboard/DashboardHistory/DashboardHistory'
import { DashboardTop } from '../UI/Dashboard/DashboardTop/DashboardTop'
import { SectionTitle } from '../UI/SectionTitle'
export async function Dashboard() {
	const { totalScorePerMonth } = await getDashboardStatistics()
	const { historyList } = await getHistory()
	return <main>
		<SectionTitle icon={LayoutDashboard} name="Dashboard" />
		<div className="flex flex-col gap-y-[50px]">
			<DashboardTop />
			<DashboardChart totalScorePerMonth={totalScorePerMonth} historyList={historyList} />
			<DashboardHistory />
		</div >
	</main >
}
