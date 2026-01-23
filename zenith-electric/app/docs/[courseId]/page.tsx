"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import DocsContent from "@/components/docs-ui/DocsContent"
import Sidebar from "@/components/docs-ui/Sidebar"

function Page() {
  const params = useParams()
  const courseId = params.courseId as string

  // Lift the state here so both Sidebar and DocsContent see the same 'activeId'
  // Defaulting to the first module ID is recommended
  const [activeId, setActiveId] = useState('getting-started')

  return (
    /* h-[calc(100vh-64px)] assumes your TopNav height is 64px (h-16) */
    <section className="flex h-[calc(100vh-64px)] bg-[#0b0e14] text-slate-300 overflow-hidden font-sans mt-5">
      
      {/* SIDEBAR CONTAINER */}
      <aside className="hidden lg:block w-72 border-r border-white/5 shrink-0">
        <Sidebar 
          courseId={courseId} 
          activeId={activeId} 
          onSelect={setActiveId} 
        />
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto [ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
        {/* Pass props to DocsContent so it knows what workbench to render */}
        <DocsContent />
      </div>
      
    </section>
  )
}

export default Page