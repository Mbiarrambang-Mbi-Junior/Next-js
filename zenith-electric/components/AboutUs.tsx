"use client"

import React from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  Cpu, 
  BarChart3, 
  DraftingCompass 
} from 'lucide-react';

function AboutUs() {
  const expertise = [
    { title: "Residential Wiring", icon: <Home size={32} strokeWidth={1.5} /> },
    { title: "Commercial Wiring", icon: <Building2 size={32} strokeWidth={1.5} /> },
    { title: "Industrial Wiring", icon: <Factory size={32} strokeWidth={1.5} /> },
    { title: "Automation & Controls", icon: <Cpu size={32} strokeWidth={1.5} /> },
    { title: "BEMS", icon: <BarChart3 size={32} strokeWidth={1.5} /> },
    { title: "Electrical Design", icon: <DraftingCompass size={32} strokeWidth={1.5} /> }
  ];

  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] bg-[#0b0e14] items-stretch border-t border-white/5">
      
      {/* LEFT SIDE: Text Content */}
      <div className="flex flex-col justify-center p-10 md:p-20 bg-[#0f121a] lg:w-1/2">
        <div className="max-w-md">
          <h2 className="text-blue-500 tracking-[0.3em] text-[10px] uppercase mb-4">
            Engineering Excellence
          </h2>
          <h1 className="text-4xl md:text-5xl text-white mb-6 tracking-tight uppercase italic">
            About Us
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed border-l border-blue-600/50 pl-6">
            Zenith Electric is a leading provider of premium electrical services in Cameroon, 
            headquartered in Buea. We specialize in high-standard automation, safety, and innovative 
            energy solutions compliant with global IEC standards.
          </p>
          <button className="w-fit bg-transparent hover:bg-blue-600 text-blue-500 hover:text-white border-2 border-blue-600 px-8 py-3 rounded-md transition-all capitalize tracking-widest active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
            Explore Services
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Expertise Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:w-1/2 bg-[#0b0e14]">
        {expertise.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center justify-center text-center p-8 border border-white/5 hover:bg-blue-600/5 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="mb-4 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
              {React.cloneElement(item.icon as React.ReactElement)}
            </div>
            <h2 className="text-[10px] text-slate-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;