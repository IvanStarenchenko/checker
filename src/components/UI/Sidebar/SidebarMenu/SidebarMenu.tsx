'use client'
import { PATH } from '@/Const/path.const'
import { CodeXml, LayoutDashboard } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SidebarLink } from './SidebarLink'
export function SidebarMenu() {
	const pathname = usePathname()
	return <div className="flex flex-col gap-4"><SidebarLink name="Dashboard" link={PATH.DASHBOARD} isActive={pathname === PATH.DASHBOARD} icon={LayoutDashboard} />
		<SidebarLink name="WorkSpace" link={PATH.WORKSPACE} isActive={pathname === PATH.WORKSPACE} icon={CodeXml} /> </div>

}
