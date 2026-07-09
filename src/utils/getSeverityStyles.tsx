import { AlertTriangle, Info } from 'lucide-react'

export const getSeverityStyles = (severity: 'critical' | 'warning' | 'suggestion') => {
	switch (severity) {
		case 'critical':
			return {
				bg: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
				icon: <AlertTriangle className="h-4 w-4 text-rose-400" />,
				label: 'Критично'
			}
		case 'warning':
			return {
				bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
				icon: <AlertTriangle className="h-4 w-4 text-amber-400" />,
				label: 'Варнинг'
			}
		case 'suggestion':
			return {
				bg: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
				icon: <Info className="h-4 w-4 text-sky-400" />,
				label: 'Совет'
			}
	}
}