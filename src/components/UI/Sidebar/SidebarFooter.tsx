
// interface SidebarFooterProps {
// 	isUser: boolean

// }

// export function SidebarFooter({ isUser }: SidebarFooterProps) {
// 	return (
// 		<div className="h-[80px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-md backdrop-blur-sm -mx-[18px]">
// 			{isUser ? (
// 				<div className="flex h-full w-full items-center gap-3">
// 					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--blue)/20 text-sm font-semibold text-(--blue)">
// 						{user.name?.[0]?.toUpperCase()}
// 					</div>
// 					<div className="min-w-0 flex-1">
// 						<p className="truncate text-sm font-semibold text-white">{user.name}</p>
// 						<p className="truncate text-xs text-white/70">{user.email}</p>
// 					</div>
// 					<p className="shrink-0 rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium tracking-wide text-(--main)">
// 						{user.plan}
// 					</p>
// 				</div>
// 			) : (
// 				<div className="flex h-full w-full items-center gap-2">
// 					<button className="rounded-lg bg-(--blue) px-3 py-1.5 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]">
// 						LogIn
// 					</button>
// 					<p className="truncate text-xs text-white/75">Try LogIn to explore more!</p>
// 				</div>
// 			)}
// 		</div>
// 	)
// }
