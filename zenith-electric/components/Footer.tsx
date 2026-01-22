"use client"

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Zap, Mail, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0e14] text-slate-500 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white group">
              <Zap className="w-5 h-5 text-blue-500 fill-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all" />
              <span className="text-lg tracking-tighter uppercase italic">
                Zenith<span className="text-blue-600">Electric</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed uppercase tracking-wider font-light">
              // Industrial Control Systems & Infrastructure. <br />
              Deploying IEC-compliant automation across the CEMAC region.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 bg-[#0f121a] border border-white/5 flex items-center justify-center text-slate-500 hover:border-blue-500/50 hover:text-blue-500 transition-all">
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Data Nodes (Navigation) */}
          <div>
            <h4 className="text-white tracking-[0.4em] text-[9px] uppercase font-medium mb-6">System_Map</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-[0.15em]">
              {['Home', 'About Us', 'Services', 'Academy', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] bg-blue-600 opacity-50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Hubs */}
          <div>
            <h4 className="text-white tracking-[0.4em] text-[9px] uppercase font-medium mb-6">Location_Nodes</h4>
            <ul className="space-y-4 text-[11px] font-light">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="tracking-wide">Molyko Commercial Hub,<br />Buea, SW Region, Cameroon</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-blue-500 shrink-0" />
                <span className="hover:text-blue-400 transition-colors cursor-pointer tracking-wide">projects@zenithelectric.cm</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Technical Feed */}
          <div>
            <h4 className="text-white tracking-[0.4em] text-[9px] uppercase font-medium mb-6">Technical_Bulletins</h4>
            <p className="text-[10px] mb-4 uppercase tracking-widest text-slate-600">Subscribe for IEC safety protocols.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="ENGINEER_AUTH_EMAIL" 
                className="w-full bg-[#0f121a] border border-white/10 rounded-sm py-3 px-4 text-[10px] text-white focus:border-blue-600/50 focus:outline-none transition-all font-mono"
              />
              <button className="absolute right-1 top-1 bg-blue-600/10 p-2 rounded-sm hover:bg-blue-600 transition-all text-blue-500 hover:text-white">
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Professional Engineering Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.3em] text-slate-600">
          <p className="font-mono">© {currentYear} ZENITH_ELECTRIC // CORE_LOGIC_V2</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-400 transition-colors">Privacy_Protocol</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">IEC_Compliance</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">Network_Status</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer