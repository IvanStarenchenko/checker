export function ScoreCircle({ score }: { score: number }) {
	const getColor = (val: number) => {
		if (val >= 80) return 'stroke-emerald-500 text-emerald-500'
		if (val >= 60) return 'stroke-amber-500 text-amber-500'
		return 'stroke-rose-500 text-rose-500'
	}

	const radius = 14
	const circumference = 2 * Math.PI * radius
	const strokeDashoffset = circumference - (score / 100) * circumference

	return (
		<div className="relative flex items-center justify-center h-9 w-9">
			<svg className="w-full h-full transform -rotate-90">
				<circle
					cx="18"
					cy="18"
					r={radius}
					className="stroke-slate-800"
					strokeWidth="3"
					fill="transparent"
				/>
				<circle
					cx="18"
					cy="18"
					r={radius}
					className={`transition-all duration-500 ${getColor(score)}`}
					strokeWidth="3"
					fill="transparent"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</svg>
			<span className={`absolute text-[11px] font-bold ${getColor(score).split(' ')[1]}`}>
				{score}
			</span>
		</div>
	)
}