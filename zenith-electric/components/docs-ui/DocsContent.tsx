"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import data from '@/utils/data.json'
import { Search, HelpCircle, ChevronRight } from 'lucide-react'

function DocsContent() {
  const params = useParams()
  const courseId = params.courseId as string
  
  // Fetching course data based on the dynamic route parameter
  const course = data.courses.find(c => c.id.toLowerCase() === courseId?.toLowerCase())

  if (!course) return (
    <div className="flex-1 flex items-center justify-center font-mono text-red-500">
      CRITICAL_ERROR: MODULE_NOT_LOADED
    </div>
  )

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
      

      {/* SCROLLABLE TEXT AREA */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#0b0e14]">
        <div className="max-w-4xl mx-auto px-8 py-16 md:py-24">
          
          {/* TITLE SECTION */}
          <h1 className="text-4xl md:text-6xl text-white uppercase italic tracking-tighter mb-8 leading-none font-bold">
            {course.title} <span className="text-blue-600">Documentation</span>
          </h1>

          <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
            Welcome to the {course.title} Platform documentation. This comprehensive guide covers both the industrial 
            control protocols and the IEC 61131-3 compliant IDE for high-fidelity automation.
          </p>

          {/* DOCUMENTATION LINKS (Matching Screenshot style) */}
          <div className="space-y-6 mb-16">
            {[
              { label: 'Getting Started', desc: 'Introduction and hardware environment setup' },
              { label: 'Platform Features', desc: 'Learn about real-time monitoring capabilities' },
              { label: 'Logic Programming', desc: 'Step-by-step guide for function block implementation' },
              { label: 'Advanced Topics', desc: 'Optimization, best practices, and regional standards' },
              { label: 'Reference', desc: 'Complete command and API reference documentation' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                <div className="text-sm">
                  <span className="text-blue-500 hover:underline font-semibold tracking-wide cursor-pointer">{item.label}</span>
                  <span className="text-slate-500 ml-2 font-light">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* INDUSTRIAL SUMMARY BOX */}
          <div className="bg-[#010204] border-l-2 border-blue-600 p-8 mb-12">
            <p className="text-sm leading-relaxed text-slate-400 font-light italic">
              The {course.id} platform combines a powerful edge-management system with a comprehensive IEC 61131-3 
              compliant programming environment. This documentation provides verified coverage of all regional deployment specifications.
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            If you need assistance, please refer to the 
            <span className="text-blue-500 cursor-pointer hover:underline mx-1">FAQ</span> or 
            <span className="text-blue-500 cursor-pointer hover:underline mx-1">Troubleshooting</span> sections.
          </p>

        </div>

        {/* FOOTER SYNC STATUS */}
        <footer className="p-8 border-t border-white/5 text-center">
           <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.4em]">
             Documentation_Node: <span className="text-green-500">Synchronized</span> // Buea_Edge_Primary
           </p>
        </footer>
      </main>
    </div>
  )
}

export default DocsContent