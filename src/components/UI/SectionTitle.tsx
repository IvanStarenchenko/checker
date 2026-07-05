import { LucideIcon } from 'lucide-react'

interface SectionTitleProps {
	icon?: LucideIcon
	name?: string
}
export function SectionTitle({ icon: Icon, name }: SectionTitleProps) {
	return <div className="flex items-center gap-2 text-[14px] mb-4 font-semibold ">
		{Icon && <Icon size={16} color='#60a5fa' />}
		{name && <span>{name}</span>}
	</div>
}
