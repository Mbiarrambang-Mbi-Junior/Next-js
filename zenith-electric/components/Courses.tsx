"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import data from '@/utils/data.json'
import {
  BookOpen, Award, Users, ArrowRight, Zap,
  ShieldCheck, Cpu, Settings, Unlock, Calendar
} from 'lucide-react'

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
  // Map the stages and perform the data slicing here in JS
  const roadmap = data.stages.map((stage, index) => ({
    ...stage,
    // Dynamically slice based on the stage index (0-2, 2-4, 4-6)
    courseList: data.courses.slice(index * 2, (index * 2) + 2)
  }));

  return (
    <main className="min-h-screen pt-10 bg-[#0b0e14] text-white pb-16 relative overflow-hidden font-sans">

      {/* BACKGROUND HEX GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%2322c55e' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6"
          >
            <Calendar size={14} className="text-green-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-green-500/80">12-Week Roadmap</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Life in the <span className="text-green-500">Program</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Graduate with IEC-compliant engineering skills, field-ready experience, and a portfolio built for the future of industrial infrastructure.
          </motion.p>
        </div>

        {/* ROADMAP CONTENT */}
        <div className="relative">
          {/* THE CENTER LINE: Thick and Glowing */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-green-500/40 to-transparent hidden md:block shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>

          {roadmap.map((stage, sIdx) => (
            <div key={sIdx} className="mb-24 relative">

              {/* MONTH INDICATOR */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center mb-12 relative z-20"
              >
                <div className="flex items-center gap-4 bg-[#0b0e14] border-2 border-green-500/30 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm">
                    {stage.month}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-green-500 font-bold">Month {stage.month}</div>
                    <div className="text-sm text-white font-medium">{stage.name}</div>
                  </div>
                </div>
              </motion.div>

              {/* COURSE GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {stage.courseList.map((course, cIdx) => {
                  const IconComponent = IconMap[course.icon] || Cpu;
                  // Alternate style for "Portfolio Projects"
                  const isProject = cIdx % 2 !== 0;

                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cIdx * 0.1 }}
                      className={`group p-8 rounded-2xl border transition-all duration-500 ${isProject
                          ? 'bg-green-500/[0.03] border-green-500/20 hover:border-green-500/50 shadow-[0_0_30px_-15px_rgba(34,197,94,0.2)]'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/10 shadow-xl'
                        }`}
                    >
                      <div className="flex items-start gap-5">
                        <div className={`p-3 rounded-xl ${isProject ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-slate-400'}`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-lg font-bold mb-2 ${isProject ? 'text-green-400' : 'text-white'}`}>
                            {course.title}
                          </h4>
                          <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                            {course.desc}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-[9px] font-mono text-slate-500 uppercase">{course.duration}</span>
                            <Link
                              href={`/docs/${course.id}`}
                              className="text-green-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"
                            >
                              View Module <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* METRICS / STATS BAR */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-green-500/10 border border-green-500/10 rounded-xl overflow-hidden">
          {[
            { label: "Free_Seats", value: "UNLIMITED", icon: <Users size={12} /> },
            { label: "Active_Modules", value: "24", icon: <BookOpen size={12} /> },
            { label: "Standard", value: "IEC_61131", icon: <Award size={12} /> },
            { label: "Cost", value: "$0.00", icon: <Unlock size={12} /> }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0b0e14] p-8 hover:bg-green-500/[0.02] transition-colors">
              <div className="flex items-center gap-3 mb-2 text-green-500">
                {stat.icon}
                <span className="text-xl font-mono italic text-white">{stat.value}</span>
              </div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Courses