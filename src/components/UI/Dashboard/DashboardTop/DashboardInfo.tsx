import { LucideIcon } from 'lucide-react'

interface DashboardInfoProps {
	name: string
	info?: string | number
	stat?: string
	icon: LucideIcon
	color?: string
}
export function DashboardInfo({ name, info, stat, color, icon: Icon }: DashboardInfoProps) {
	return <div className={`flex flex-col gap-2 p-4 rounded-lg bg-[var(--light-bright)] text-[var(--main)] `}>
		<div className="flex items-center justify-between">
			<span className="text-[14px] font-medium">{name}</span>
			<div className="flex items-center justify-between"> <Icon size={16} style={{ color: `var(--${color})` }} />
			</div>
		</div>

		<span className="text-[24px] font-semibold text-white">{info || 0}</span>
		<p className="text-[14px] )]">{stat || 'No stat found'}</p>
	</div >
}
