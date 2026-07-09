import { getScoreColor } from './getScoreColor'
export function ScoreCircle({ score, size }: { score: number; size: number }) {


	const radius = 14
	const circumference = 2 * Math.PI * radius
	const strokeDashoffset = circumference - (score / 100) * circumference

	return (
		<div className="relative flex  items-center justify-center" style={{ width: size, height: size }}>
			<svg className="w-full h-full transform -rotate-90">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className="stroke-slate-800"
					strokeWidth="3"
					fill="transparent"
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className={`transition-all duration-500 ${getScoreColor(score)}`}
					strokeWidth="3"
					fill="transparent"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</svg>
			<span className={`absolute text-[11px] font-bold ${getScoreColor(score).split(' ')[1]}`}>
				{score}
			</span>
		</div>
	)
}