"use client"

import { Zap, ArrowRight, Cpu } from "lucide-react"

function Hero() {
    return (
        // Changed flex-col (mobile) to flex-row (desktop)
        // Removed fixed pl-30 and px-10 for responsive px-6, md:px-12, lg:px-20
        <section className="relative flex flex-col lg:flex-row min-h-screen lg:h-screen w-full text-white bg-[#0b0e14] px-6 md:px-12 lg:px-20 py-20 lg:py-0 overflow-hidden">
            
            {/* LEFT SIDE: Content Area */}
            <div className="flex-1 flex flex-col justify-center z-10 bg-[#0b0e14]">
                <div className="w-full max-w-2xl">
                    
                    {/* Technical Tagline */}
                    <div className="flex items-center gap-3 mb-6 md:mb-8 text-blue-500">
                        <div className="p-2">
                           <Zap size={20} className="fill-blue-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em] bg-blue-500/10 rounded-lg border border-blue-500/20 px-2 py-1">
                            Zenith electric
                        </span>
                    </div>

                    {/* Responsive Text Sizes: text-4xl (mobile) up to text-7xl (desktop) */}
                    <h1 className="text-xl md:text-xl lg:text-3xl mb-6 md:mb-8 tracking-tighter leading-[1.1] lg:leading-[0.9] uppercase italic">
                        <span className="text-blue-600">innovate, automate, control and efficiency.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-12 leading-relaxed max-w-xl border-l-2 border-blue-600 pl-6 md:pl-8">
                        Deploying IEC-compliant automation and industrial power solutions 
                        across the ecosystem in Buea.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="w-full sm:w-auto hover:bg-blue-600 text-blue-600 px-8 py-4 cursor-pointer rounded-md capitalize tracking-widest bg-black border-2 border-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-[0_0_40px_rgba(37,99,235,0.25)] active:scale-95 flex items-center justify-center gap-4 group">
                            Initialize Project
                            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Visual/Telemetry Area */}
            <div className="flex-1 flex items-center justify-center bg-[#0b0e14] relative mt-16 lg:mt-0">
                
                {/* Background Decoration (Hidden on small mobile for clarity) */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Technical "Telemetry" Card - Responsive width */}
                <div className="relative z-10 bg-[#0b0e14]/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl w-full max-w-[320px] md:max-w-sm">
                    <div className="flex mb-4 gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-blue-500 mb-6">
                        <Cpu size={24}/>
                        <h4 className="text-xs uppercase tracking-[0.2em]">Active Modules</h4>
                    </div>
                    
                    <div className="space-y-4 font-mono text-[10px] text-slate-500">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>PLC_MASTER_01</span>
                            <span className="text-blue-400">RUNNING</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>SCADA_SYNC</span>
                            <span className="text-blue-400">ACTIVE</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>BEMS_01</span>
                            <span className="text-blue-400">IDLE</span>
                        </div>
                        <div className="flex justify-between">
                            <span>GRID_STABILITY</span>
                            <span className="text-green-500">99.8%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero