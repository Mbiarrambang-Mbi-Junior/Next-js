"use client"

import React from 'react'
import Link from 'next/link'
import ZenithElectric from './ZenithElectric'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { ArrowRight,Mail, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0e14] text-green-500/50 pt-16 pb-8 border-t border-green-500/10 relative overflow-hidden">
      
      {/* Background Grid Accent - Updated to Green-500 tint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white group cursor-default">
              <ZenithElectric />
              <span className="text-lg tracking-tighter uppercase italic">
                Zenith<span className="text-green-500">Electric</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed uppercase tracking-wider font-light text-gray-500">
              // Industrial Control Systems & Infrastructure. <br />
              Deploying IEC-compliant automation across the CEMAC region.
            </p>
            <div className="flex gap-2">
              {[BsFacebook, BsTwitter, BsLinkedin, BsInstagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 bg-[#0f121a] border border-green-500/10 flex items-center justify-center text-green-500/40 hover:border-green-500/50 hover:text-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.1)] transition-all">
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
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] bg-green-600 opacity-50 group-hover:opacity-100 group-hover:w-3 transition-all"></span>
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
                <MapPin size={14} className="text-green-500 shrink-0 mt-0.5" />
                <span className="tracking-wide text-gray-500">Molyko Commercial Hub,<br />Buea, SW Region, Cameroon</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-green-500 shrink-0" />
                <span className="hover:text-green-400 transition-colors cursor-pointer tracking-wide text-green-500/60">projects@zenithelectric.cm</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Technical Feed */}
          <div>
            <h4 className="text-white tracking-[0.4em] text-[9px] uppercase font-medium mb-6">Technical_Bulletins</h4>
            <p className="text-[10px] mb-4 uppercase tracking-widest text-green-900">Subscribe for IEC safety protocols.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="ENGINEER_AUTH_EMAIL" 
                className="w-full bg-[#0f121a] border border-green-500/10 rounded-sm py-3 px-4 text-[10px] text-white focus:border-green-500/50 focus:outline-none transition-all font-mono placeholder:text-green-900/50"
              />
              <button className="absolute right-1 top-1 bg-green-500/10 p-2 rounded-sm hover:bg-green-500 transition-all text-green-500 hover:text-black shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Professional Engineering Credits */}
        <div className="pt-8 border-t border-green-500/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.3em] text-green-900 font-mono">
          <p>© {currentYear} ZENITH_ELECTRIC // CORE_LOGIC_V2</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-green-400 transition-colors">Privacy_Protocol</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">IEC_Compliance</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">Network_Status</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer