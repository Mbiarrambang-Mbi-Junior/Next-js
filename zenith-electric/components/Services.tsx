"use client"

import React from 'react'
import data from '../utils/data.json'
// Import all necessary icons from lucide-react
import { Cpu, Network, Layout, Factory, ArrowUpRight } from 'lucide-react'

// Map the string names in your data.json "icon" fields to the actual Lucide Component
const iconMap: Record<string, React.ElementType> = {
  Cpu: Cpu,
  Network: Network,
  Layout: Layout,
  Factory: Factory
};

function Services() {
  // Pulling the services array directly from the JSON file
  const services = data.services;

  return (
    <section className="bg-[#0b0e14] relative overflow-hidden">
      {/* Background Digital Grid - Updated to Green-500 tint */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#22c55e 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
             <span className="w-8 h-[1px] bg-green-600"></span>
             <h2 className="text-green-500 tracking-[0.5em] text-[10px] uppercase font-medium">
               Technical Services
             </h2>
             <span className="w-8 h-[1px] bg-green-600"></span>
          </div>
          <h3 className="text-5xl md:text-7xl text-white uppercase italic tracking-tighter leading-none text-center">
            Digital <span className="text-green-500 text-shadow-glow">Infrastructure</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl">
          {services.map((service, index) => {
            // Dynamically select the component from the map based on JSON icon string
            const IconComponent = iconMap[service.icon] || Cpu;

            return (
              <div 
                key={index} 
                className="group relative p-12 bg-[#0b0e14] hover:bg-[#0d111a] transition-all duration-700 overflow-hidden"
              >
                {/* Corner Accent - Updated to Green */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <ArrowUpRight size={20} className="text-green-500" />
                </div>

                {/* Technical ID Watermark (from JSON) - Updated to Green tint */}
                <span className="absolute top-8 right-12 text-6xl font-mono font-black text-white/[0.02] pointer-events-none group-hover:text-green-500/[0.04] transition-colors">
                  {service.id}
                </span>

                {/* Icon with Blueprint Circle - Updated to Green */}
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-green-500/20 rounded-full group-hover:scale-125 group-hover:border-green-500/50 transition-transform duration-700"></div>
                  <div className="text-green-500 group-hover:text-green-400 transition-colors duration-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                    <IconComponent size={32} strokeWidth={1.0} />
                  </div>
                </div>

                <h4 className="text-2xl text-white mb-6 uppercase italic tracking-tight font-light group-hover:text-green-500 transition-colors duration-500">
                  {service.title}
                </h4>
                
                <p className="text-green-500/60 mb-10 text-sm leading-relaxed max-w-sm font-light tracking-wide">
                  {service.desc}
                </p>

                {/* Technical Feature List - Updated to Green shades */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-1 bg-green-500/[0.03] border border-green-500/10 rounded-sm hover:border-green-500/30 transition-colors"
                    >
                      <span className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                      <span className="text-[9px] text-green-500/50 uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Glow Line - Updated to Green-500 */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-green-500 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#22c55e]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services;