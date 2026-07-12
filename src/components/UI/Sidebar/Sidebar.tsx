import { SidebarHeader } from './SidebarHeader'
import { SidebarMenu } from './SidebarMenu/SidebarMenu'

export function Sidebar() {
	return <div className='grid grid-rows-[auto_1fr_auto] h-full'>
		<SidebarHeader />
		<SidebarMenu />
		{/* <SidebarFooter isUser={true} user={{ id: '1', name: 'John Doe', email: 'john.doe@example.com', plan: 'Pro' }} /> */}
	</div >
}
