"use client"

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { PlayCircle, Cpu, Code, Shield, Terminal, ChevronRight } from 'lucide-react'

function Sidebar() {
  const params = useParams()
  const courseId = params.courseId as string

  const navItems = [
    { label: 'Getting Started', icon: PlayCircle },
    { label: 'Platform Features', icon: Cpu },
    { label: 'IEC 61131-3 Programming', icon: Code },
    { label: 'Advanced Topics', icon: Shield },
    { label: 'Reference', icon: Terminal },
  ]

  return (
    /* Removed mt-20 to align with the start of the content area */
    <div className="flex flex-col h-full bg-[#0b0e14]">

      {/* NAV LINKS */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        <div>
          <h3 className="px-3  text-[9px] text-blue-600 rounded font-bold uppercase tracking-[0.3em] mb-4 border border-1 border-blue-600">Core_Navigator</h3>
          <div className="space-y-1">
            {navItems.map((item, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 text-[11px] text-slate-400 hover:text-white hover:bg-white/5 transition-all group border-l-2 border-transparent hover:border-blue-600">
                <item.icon size={14} className="text-slate-600 group-hover:text-blue-500" />
                <span className="uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* FOOTER ACTION */}
      <div className="p-4 bg-[#0d111a]/50 border-t border-white/5">
        <Link href="/courses" className="flex items-center gap-2 text-[9px] text-slate-500 hover:text-white transition-colors uppercase font-mono tracking-widest">
          <ChevronRight size={12} className="rotate-180 text-blue-500" /> system_return
        </Link>
      </div>
    </div>
  )
}

export default Sidebar