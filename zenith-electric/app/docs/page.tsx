"use client"

import DocsContent from "@/components/docs-ui/DocsContent"
import Sidebar from "@/components/docs-ui/Sidebar"

function Page() {
  return (
    /* h-[calc(100vh-64px)] assumes your TopNav height is 64px (h-16) */
    <section className="flex h-[calc(100vh-64px)] bg-[#0b0e14] text-slate-300 overflow-hidden font-sans mt-20">
      
      {/* SIDEBAR CONTAINER */}
      <aside className="hidden lg:block w-72 border-r border-white/5 shrink-0">
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <DocsContent />
      </div>
      
    </section>
  )
}

export default Page