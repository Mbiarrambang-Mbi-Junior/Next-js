"use client"

import React from 'react'
import { Mail, Phone, MapPin, Send, Terminal } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0b0e14] border-t border-green-500/10 relative overflow-hidden">
      
      {/* Technical Decorative Element - Updated to Green tint */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-green-500/10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-green-500/10 border border-green-500/10">
          
          {/* LEFT SIDE: Digital Form Terminal */}
          <div className="bg-[#0b0e14] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Terminal size={18} className="text-green-500" />
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-green-500 font-medium">
                System_Inquiry_Terminal
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl text-white mb-10 uppercase italic tracking-tighter">
              Request <span className="text-green-500 text-shadow-glow">Technical Quote</span>
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-green-500/50 ml-1">Project_Reference</label>
                  <input className="w-full bg-[#0f121a] border border-green-500/10 rounded-sm px-4 py-3 text-sm text-white focus:border-green-500/50 outline-none transition-all placeholder:text-slate-700 font-mono focus:shadow-[0_0_15px_rgba(34,197,94,0.1)]" placeholder="NAME_OR_ORG" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-green-500/50 ml-1">Communication_Node</label>
                  <input className="w-full bg-[#0f121a] border border-green-500/10 rounded-sm px-4 py-3 text-sm text-white focus:border-green-500/50 outline-none transition-all placeholder:text-slate-700 font-mono focus:shadow-[0_0_15px_rgba(34,197,94,0.1)]" placeholder="EMAIL_ADDRESS" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-green-500/50 ml-1">Instruction_Set</label>
                <textarea rows={4} className="w-full bg-[#0f121a] border border-green-500/10 rounded-sm px-4 py-3 text-sm text-white focus:border-green-500/50 outline-none transition-all placeholder:text-slate-700 font-mono focus:shadow-[0_0_15px_rgba(34,197,94,0.1)]" placeholder="DEFINE_REQUIREMENTS..."></textarea>
              </div>

              <button className="w-full bg-transparent hover:bg-green-500 text-green-500 hover:text-black border border-green-500 py-4 rounded-sm transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.2em] text-[11px] shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                Transmit Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Technical Data Nodes */}
          <div className="bg-[#0f121a]/50 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-3xl md:text-5xl text-white mb-6 uppercase italic tracking-tighter leading-[0.9]">
                Ready to <span className="text-green-500">Initialize</span> <br />Your Infrastructure?
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed max-w-sm font-mono">
                // Connect with our engineering team for IEC-compliant power and automation deployment.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="mt-1 text-green-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all"><MapPin size={20} strokeWidth={1.5}/></div>
                <div>
                  <p className="text-[9px] font-medium text-green-500/40 uppercase tracking-[0.3em] mb-1">Global Logistics Center</p>
                  <p className="text-sm text-white font-light tracking-wide">Molyko Commercial Hub, <br />Buea, SW Region, Cameroon</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="mt-1 text-green-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all"><Mail size={20} strokeWidth={1.5}/></div>
                <div>
                  <p className="text-[9px] font-medium text-green-500/40 uppercase tracking-[0.3em] mb-1">Technical Sync</p>
                  <p className="text-sm text-white font-light tracking-wide hover:text-green-400 transition-colors">projects@@ChadashAutomation.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="mt-1 text-green-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all"><Phone size={20} strokeWidth={1.5}/></div>
                <div>
                  <p className="text-[9px] font-medium text-green-500/40 uppercase tracking-[0.3em] mb-1">Support Line</p>
                  <p className="text-sm text-white font-light tracking-wide">+237 [REDACTED_NODE]</p>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-16 pt-8 border-t border-green-500/10">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                    <span className="text-[10px] text-green-500/50 uppercase tracking-widest font-mono">Server_Status: Online</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
