export const getScoreColor = (val: number) => {
	if (val >= 80) return 'stroke-emerald-500 text-emerald-500'
	if (val >= 60) return 'stroke-amber-500 text-amber-500'
	return 'stroke-rose-500 text-rose-500'
}
