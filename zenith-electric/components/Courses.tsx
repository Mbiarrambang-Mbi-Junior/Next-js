"use client"

import React from 'react'
import Link from 'next/link'
import data from '@/utils/data.json'
import { 
  BookOpen, Award, Users, ArrowRight, Zap, 
  ShieldCheck, Cpu, Settings, ChevronRight, 
  Activity, Unlock 
} from 'lucide-react'

// Map string keys from JSON to Lucide Components
const IconMap: { [key: string]: React.ElementType } = {
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  BookOpen: BookOpen,
  Award: Award,
  Users: Users,
  Settings: Settings
}

function Courses() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-white pt-24 pb-16 relative overflow-hidden font-sans">
      
      {/* DIGITAL OVERLAY ELEMENTS */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%232563eb' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TERMINAL BREADCRUMB */}
        <div className="flex items-center gap-2 mb-8 font-mono text-[10px] text-slate-500 uppercase tracking-widest bg-white/[0.02] w-fit px-3 py-1 border border-white/5">
          <span>Root</span>
          <ChevronRight size={10} />
          <span>Academy</span>
          <ChevronRight size={10} />
          <span className="text-blue-500 font-bold">Free_Catalog.sh</span>
        </div>

        {/* PAGE HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <Unlock size={14} className="text-green-500" />
               <h2 className="text-green-500 tracking-[0.4em] text-[10px] uppercase font-medium">Open Learning Initiative</h2>
            </div>
            <h1 className="text-4xl md:text-6xl uppercase italic tracking-tighter leading-none mb-4">
              Technical <span className="text-blue-600">Curriculum</span>
            </h1>
            <p className="text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed font-light font-mono">
              // Accessing unrestricted modules. Zenith Technical Institute 
              is providing these certifications at zero cost for regional growth.
            </p>
          </div>
          
          <div className="hidden lg:block text-right">
             <div className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter mb-1">Billing_Status: $0.00</div>
             <div className="text-[10px] font-mono text-green-500/50 uppercase tracking-tighter">Access: Unrestricted</div>
          </div>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 shadow-2xl">
          {data.courses.map((course, index) => {
            const IconComponent = IconMap[course.icon] || Cpu; 
            
            // Format ID for URL: "SYS-ARC-01" becomes "sys-arc-01"
            const courseSlug = course.id.toLowerCase();

            return (
              <div 
                key={index} 
                className="group bg-[#0b0e14] p-8 hover:bg-[#0d111a] transition-all duration-700 flex flex-col h-full relative overflow-hidden"
              >
                {/* Meta Header */}
                <div className="absolute top-4 right-6 flex flex-col items-end gap-1">
                  <span className="text-[10px] font-mono text-white/10 group-hover:text-blue-500/30 transition-colors">
                    {course.id}
                  </span>
                  <span className="text-[8px] font-mono text-green-500/40 group-hover:text-green-500 transition-colors border border-green-500/20 px-1 bg-green-500/5">
                    {course.status}
                  </span>
                </div>

                {/* Animated Icon */}
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:text-blue-400">
                  <IconComponent size={32} strokeWidth={1.0} />
                </div>
                
                {/* Level & Duration Tags */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[8px] px-2 py-0.5 border border-blue-500/20 text-blue-400 uppercase tracking-widest bg-blue-500/5 font-bold">
                    {course.level}
                  </span>
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest font-mono">
                    {course.duration}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-xl text-white mb-4 uppercase italic tracking-tight font-light group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-500 text-xs mb-10 leading-relaxed font-light line-clamp-3">
                  {course.desc}
                </p>

                {/* Action Button: LINK UPDATED TO DIRECT TO DOCS */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link 
                    href={`/courses/docs/${course.id}`}
                    className="w-full flex items-center justify-between group/btn text-green-500/80 hover:text-green-400 transition-colors"
                  >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Initialize_Free_Session</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
                
                {/* Animated Glowing Edge */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
              </div>
            )
          })}
        </div>

        {/* METRICS BAR */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 shadow-inner">
            {[
              { label: "Free_Seats", value: "UNLIMITED", icon: <Users size={12}/> },
              { label: "Active_Modules", value: "24", icon: <BookOpen size={12}/> },
              { label: "Standard", value: "IEC_61131", icon: <Award size={12}/> },
              { label: "Cost_Structure", value: "$0.00", icon: <Unlock size={12}/> }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0b0e14] p-6 group hover:bg-white/[0.02] transition-colors border-r border-white/5 last:border-r-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-500/40 group-hover:text-green-500 transition-colors">{stat.icon}</span>
                  <span className="text-xl font-light text-white tracking-tighter italic font-mono">{stat.value}</span>
                </div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-slate-600 group-hover:text-slate-400 transition-colors">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}

export default Courses