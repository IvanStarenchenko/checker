import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SidebarLinkProps {
	icon?: LucideIcon
	name: string
	link: string
	isActive?: boolean
}
export function SidebarLink({ name, link, icon: Icon, isActive }: SidebarLinkProps) {
	return <Link className={`cursor-pointer flex items-center gap-2 ${isActive ? 'bg-[var(--text-active)/70] text-[var(--text-active)]' : 'text-[var(--main)] hover:text-[var(--text-active)]/50'} `} href={link}>
		{Icon && <Icon />}
		<span className="text-md">{name}</span>
	</Link>
}
