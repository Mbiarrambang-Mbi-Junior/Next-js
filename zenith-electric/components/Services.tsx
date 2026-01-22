"use client"

import React from 'react'
import { Cpu, Network, Layout, Factory, ArrowUpRight } from 'lucide-react'

function Services() {
  const services = [
    { 
      id: "01",
      title: "Automation & Process Control", 
      icon: <Cpu />, 
      desc: "Custom PLC programming and SCADA integration for industrial efficiency.", 
      features: ["PLC/HMI", "VFD Control", "Sensors"] 
    },
    { 
      id: "02",
      title: "BEMS & Smart IoT", 
      icon: <Network />, 
      desc: "Optimizing HVAC and power usage via high-fidelity IoT sensor arrays.", 
      features: ["Analytics", "IoT", "Load Shedding"] 
    },
    { 
      id: "03",
      title: "Electrical Schematic Design", 
      icon: <Layout />, 
      desc: "Precision CAD drafting compliant with global IEC safety standards.", 
      features: ["CAD", "Panels", "Circuit Mapping"] 
    },
    { 
      id: "04",
      title: "Industrial & Commercial Wiring", 
      icon: <Factory />, 
      desc: "Infrastructure and cable management for heavy-load industrial hubs.", 
      features: ["Power Systems", "Cable Management", "Switchgear"] 
    }
  ]

  return (
    <section className="py-32 bg-[#0b0e14] relative overflow-hidden">
      {/* Background Digital Grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
             <span className="w-8 h-[1px] bg-blue-600"></span>
             <h2 className="text-blue-500 tracking-[0.5em] text-[10px] uppercase font-medium">
               Technical Services
             </h2>
             <span className="w-8 h-[1px] bg-blue-600"></span>
          </div>
          <h3 className="text-5xl md:text-7xl text-white uppercase italic tracking-tighter leading-none text-center">
            Digital <span className="text-blue-600">Infrastructure</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-12 bg-[#0b0e14] hover:bg-[#0d111a] transition-all duration-700 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <ArrowUpRight size={20} className="text-blue-500" />
              </div>

              {/* Technical ID Watermark */}
              <span className="absolute top-8 right-12 text-6xl font-mono font-black text-white/[0.02] pointer-events-none group-hover:text-blue-500/[0.05] transition-colors">
                {service.id}
              </span>

              {/* Icon with Blueprint Circle */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-blue-500/20 rounded-full group-hover:scale-125 group-hover:border-blue-500/50 transition-transform duration-700"></div>
                <div className="text-blue-500 group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                      size: 32,
                      strokeWidth: 1.0 
                  })}
                </div>
              </div>

              <h4 className="text-2xl text-white mb-6 uppercase italic tracking-tight font-light">
                {service.title}
              </h4>
              
              <p className="text-slate-400 mb-10 text-sm leading-relaxed max-w-sm font-light tracking-wide">
                {service.desc}
              </p>

              {/* Technical Feature List */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((f, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-sm"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_#2563eb]"></span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#2563eb]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;