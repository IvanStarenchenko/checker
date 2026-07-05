import { Sidebar } from '@/components/UI/Sidebar/Sidebar'


export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="relative flex">
			<aside className="fixed top-0 left-0 h-screen w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between shrink-0 z-10">
				<Sidebar />
			</aside>

			<main className="flex-1 ml-64 min-h-screen bg-slate-950 p-8">
				<div className=" mx-auto">
					{children}
				</div>
			</main>
		</div>
	)
}