"use client"

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import data from "@/utils/data.json"
import { ChevronRight, PlayCircle, Cpu, Code, Shield, Terminal, Zap } from 'lucide-react'

const IconMap: { [key: string]: React.ElementType } = {
  PlayCircle, Cpu, Code, Shield, Terminal, Zap
}

// 1. Define the interface for the new props
interface SidebarProps {
  courseId: string;
  activeId: string;
  onSelect: (id: string) => void;
}

// 2. Update the function to accept these props
function Sidebar({ courseId, activeId, onSelect }: SidebarProps) {
  // Use courseId from props to get specific modules
  const sideItems = (data.courseDetails as any)[courseId] || data.sideItems

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] border-r border-white/5 w-64">
      <nav className="flex-1 overflow-y-auto px-4 pt-4 space-y-6 custom-scrollbar">
        <div>
          <h3 className="px-3 text-[9px] text-green-500 rounded font-bold uppercase tracking-[0.3em] mb-4 border border-green-500/30 py-1">
            {courseId}_Navigator
          </h3>
          <div className="space-y-1">
            {sideItems.map((item: any) => {
              const Icon = IconMap[item.icon] || ChevronRight;
              // 3. Check if this specific item is the active one
              const isActive = activeId === item.id;

              return (
                <button 
                  key={item.id} 
                  onClick={() => onSelect(item.id)} // 4. Call the select function on click
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-[11px] transition-all group border-l-2 ${
                    isActive 
                      ? "text-white bg-green-500/10 border-green-500" 
                      : "text-slate-400 border-transparent hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-green-500" : "text-green-500/50 group-hover:text-green-500"} />
                  <span className="uppercase tracking-widest">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="p-4 bg-[#0d111a]/50 border-t border-white/5">
        <Link href="/courses" className="flex items-center gap-2 text-[9px] text-slate-500 hover:text-white transition-colors uppercase font-mono tracking-widest">
          <ChevronRight size={12} className="rotate-180 text-green-500" /> system_return
        </Link>
      </div>
    </div>
  )
}

export default Sidebar