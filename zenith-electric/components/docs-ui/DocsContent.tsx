"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import data from '@/utils/data.json'
// Import your specialized components
import ZenithEngineeringStudio from './ZenithEngineeringStudio' 
import Sidebar from './Sidebar'

function DocsContent() {
  const params = useParams()
  const courseId = params.courseId as string
  
  // Track which module ID is currently selected
  const [activeModuleId, setActiveModuleId] = useState('intro')

  const course = data.courses.find(c => c.id.toLowerCase() === courseId?.toLowerCase())
  const docModules = (data.courseDetails as any)[courseId] || []
  const activeModule = docModules.find((m: any) => m.id === activeModuleId)

  // This function decides WHAT component to show in the center
  const renderModuleContent = () => {
    switch (activeModule?.type) {
      case 'PLC_SANDBOX':
        return <ZenithEngineeringStudio />
      case 'CODE_EDITOR':
        return <div className="p-8 bg-black rounded border border-white/10 font-mono text-green-500"> {/* Mock Code Editor */}
          <code>void setup() {'{'} pinMode(13, OUTPUT); {'}'}</code>
        </div>
      case 'HARDWARE_VIEWER':
        return <div className="text-white italic">Hardware Pinout Diagram Loading...</div>
      default:
        return (
          <div className="prose prose-invert">
            <h2 className="text-green-500">{activeModule?.label}</h2>
            <p className="text-slate-400">Welcome to the {activeModule?.label} module instructions...</p>
          </div>
        )
    }
  }

  if (!course) return <div className="text-red-500">ERROR: MODULE_NOT_LOADED</div>

  return (
    <div className="flex h-screen bg-[#0b0e14]">
      <main className="flex-1 overflow-y-auto p-12">
        <div className="max-w-5xl mx-auto">
            {/* Header stays consistent */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white uppercase italic">
                    {course.title} <span className="text-green-500">Studio</span>
                </h1>
                <p className="text-slate-500 font-mono text-xs">PATH: {courseId} / {activeModule?.label}</p>
            </div>

            {/* 2. DYNAMIC CONTENT AREA */}
            <div className="mt-8">
                {renderModuleContent()}
            </div>
        </div>
      </main>
    </div>
  )
}

export default DocsContent