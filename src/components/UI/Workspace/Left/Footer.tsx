"use client"

import { PERSONAS } from '@/Data/Personas.data'
import { ChevronDown } from 'lucide-react'
import { useReviewDisplay } from '../hooks/useReviewDisplay'
import { AnalyzeButton } from './AnalyzeButton'
import { PersonaSelector } from './PersonaSelector'


interface FooterProps {
  code: string
}

export function Footer({ code }: FooterProps) {
  const { isAnalyzing, isOpen, setIsOpen, iconMap, TriggerIcon, handleAnalyze, persona, setPersona } = useReviewDisplay({ code })

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-800/60 bg-[#0d1321]/20 relative">
      <div className="relative w-72">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-slate-900/80 border border-slate-800/80 rounded-lg px-3 py-2 text-xs text-slate-300 outline-none cursor-pointer hover:border-slate-700 transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <TriggerIcon size={14} style={{ color: persona.color }} />
            <span className="font-medium text-slate-200">{persona.name}</span>
          </div>
          <ChevronDown size={14} className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <PersonaSelector
            iconMap={iconMap}
            PERSONAS={PERSONAS}
            persona={persona}
            setPersona={setPersona}
            setIsOpen={setIsOpen}
          />
        )}
      </div>

      <AnalyzeButton handleAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
    </div>
  )
}