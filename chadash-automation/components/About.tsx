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

export default function AboutUs() {
  const expertise = [
    { title: "Residential Wiring", icon: <Home size={32} strokeWidth={1.5} /> },
    { title: "Commercial Wiring", icon: <Building2 size={32} strokeWidth={1.5} /> },
    { title: "Industrial Wiring", icon: <Factory size={32} strokeWidth={1.5} /> },
    { title: "Automation & Controls", icon: <Cpu size={32} strokeWidth={1.5} /> },
    { title: "BEMS", icon: <BarChart3 size={32} strokeWidth={1.5} /> },
    { title: "Electrical Design", icon: <DraftingCompass size={32} strokeWidth={1.5} /> }
  ];

  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] bg-[#0b0e14] items-stretch border-t border-green-500/10">
      
      {/* LEFT SIDE: Text Content */}
      <div className="flex flex-col justify-center p-10 md:p-20 bg-[#0d111a] lg:w-1/2 relative overflow-hidden">
        {/* Subtle Decorative Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-md relative z-10">
          <h2 className="text-green-500 tracking-[0.3em] text-[10px] uppercase mb-4 font-bold">
            Engineering Excellence
          </h2>
          <h1 className="text-4xl md:text-5xl text-white mb-6 tracking-tight uppercase italic">
            About <span className="text-green-500 [text-shadow:0_0_15px_rgb(34_197_94/0.4)]">Us</span>
          </h1>
          <p className="text-lg text-white mb-8 leading-relaxed border-l border-green-500/50 pl-6">
            Chadash Automation is a premier specialist in smart technology and industrial control in Cameroon. 
            We deliver advanced PLC programming, building automation, and robust security systems engineered 
            to international safety and efficiency standards.
          </p>
          <button className="w-fit bg-transparent hover:bg-green-500 text-green-500 hover:text-black border-2 border-green-500 px-8 py-3 rounded-md transition-all capitalize tracking-widest active:scale-95 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
            Explore Services
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Expertise Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:w-1/2 bg-[#0b0e14]">
        {expertise.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center justify-center text-center p-8 border border-green-500/5 hover:bg-green-500/3 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-500"></div>
            
            <div className="mb-4 text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
              {item.icon}
            </div>
            <h2 className="text-[10px] text-gray-500/50 group-hover:text-white uppercase tracking-[0.2em] transition-colors relative z-10">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}