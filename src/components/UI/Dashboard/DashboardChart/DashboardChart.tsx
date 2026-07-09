"use client"

import { IHistoryState } from '@/interfaces/History.interface'
import { getChartData } from '@/services/getChartData.service'
import { TrendingUp } from "lucide-react"
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import { SectionTitle } from '../../SectionTitle'

interface DashboardChartProps {
	totalScorePerMonth: number
	historyList?: IHistoryState[]
}

export function DashboardChart({ totalScorePerMonth, historyList }: DashboardChartProps) {
	const { chartData, firstHistoryEntryDateString } = getChartData(historyList || [])

	return (
		<div>
			<SectionTitle icon={TrendingUp} name="Code Quality Trend" />
			<div className="w-full bg-[var(--light-bright)] border border-slate-800 rounded-xl p-6 backdrop-blur-sm">

				<div className="flex items-start justify-between mb-6">
					<div>
						<h3 className="text-base font-semibold text-white tracking-tight">
							Code Quality Trend
						</h3>
						<p className="text-xs text-slate-500 mt-0.5">
							Average quality score per review session
						</p>
					</div>

					<div className="flex items-center gap-1.5 text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md text-xs font-medium">
						<TrendingUp className="h-3.5 w-3.5" />
						<span>+{totalScorePerMonth} pts since {firstHistoryEntryDateString}</span>
					</div>
				</div>

				<div className="h-[300px] w-full">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={chartData}
							margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
						>
							<defs>
								<linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
									<stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
								</linearGradient>
							</defs>

							<CartesianGrid
								strokeDasharray="3 3"
								stroke="#1e293b"
								vertical={false}
							/>

							<XAxis
								dataKey="date"
								stroke="#475569"
								fontSize={12}
								tickLine={false}
								axisLine={false}
								dy={10}
							/>

							<YAxis
								stroke="#475569"
								fontSize={12}
								tickLine={false}
								axisLine={false}
								domain={[0, 100]}
								tickCount={4}
							/>

							<Tooltip
								contentStyle={{
									backgroundColor: "#0f172a",
									borderColor: "#1e293b",
									borderRadius: "8px",
									color: "#fff",
								}}
								itemStyle={{ color: "#3b82f6" }}
								labelStyle={{ color: "#94a3b8" }}
							/>

							<Area
								type="monotone"
								dataKey="score"
								stroke="#3b82f6"
								strokeWidth={2}
								fillOpacity={1}
								fill="url(#colorScore)"
								dot={{ r: 4, strokeWidth: 1, fill: "#3b82f6" }}
								activeDot={{ r: 6, strokeWidth: 0 }}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}