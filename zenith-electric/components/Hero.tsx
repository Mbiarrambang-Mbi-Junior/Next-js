"use client"

import { Zap, ArrowRight, Cpu } from "lucide-react"

function Hero() {
    return (
        <section className="relative flex flex-col lg:flex-row min-h-screen lg:h-screen w-full text-green-500 bg-[#0b0e14] px-6 md:px-12 lg:px-20 py-20 lg:py-0 overflow-hidden">
            
            {/* LEFT SIDE: Content Area */}
            <div className="flex-1 flex flex-col justify-center z-10 bg-[#0b0e14]">
                <div className="w-full max-w-2xl">
                    
                    {/* Technical Tagline */}
                    <div className="flex items-center gap-3 mb-6 md:mb-8 text-green-500">
                        <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                           <Zap size={20} className="fill-green-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em]">
                           Zenith electric
                        </span>
                    </div>

                    {/* Main Heading - Changed to Green-500 */}
                    <h1 className="text-xl md:text-xl lg:text-3xl mb-6 md:mb-8 tracking-tighter leading-[1.1] lg:leading-[0.9] uppercase italic text-green-500">
                        innovate, automate, control and efficiency.
                    </h1>

                    {/* Subtext - Changed to Green-500 with slight opacity for hierarchy */}
                    <p className="text-lg md:text-xl text-white mb-10 md:mb-12 leading-relaxed max-w-xl border-l-2 border-green-500 pl-6 md:pl-8">
                        Deploying IEC-compliant automation and industrial power solutions 
                        across the ecosystem in Buea.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        {/* Button with Green-500 Text, Border, and Shadow */}
                        <button className="w-full sm:w-auto hover:bg-green-500 text-green-500 px-8 py-4 cursor-pointer rounded-md capitalize tracking-widest bg-black border-2 border-green-500 hover:text-black transition-all shadow-[0_0_40px_rgba(34,197,94,0.35)] active:scale-95 flex items-center justify-center gap-4 group">
                            Initialize Project
                            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Visual/Telemetry Area */}
<div className="flex-1 flex items-center justify-center bg-[#0b0e14] relative mt-16 lg:mt-0">
    
    {/* Background Decoration - Mixed Green and Gray Grid */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#22c55e12_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    {/* Technical "Telemetry" Card - Refined with White and Gray accents */}
    <div className="relative z-10 bg-[#0b0e14]/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-sm shadow-[0_0_50px_rgba(34,197,94,0.05)] w-full max-w-[320px] md:max-w-sm">
        
        {/* LED Status Bar */}
        <div className="flex mb-6 gap-2 border-b border-white/5 pb-4">
            {/* Green Status Indicator */}
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            {/* Yellow Status Indicator */}
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_#eab308]"></div>
            {/* Red Status Indicator */}
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#dc2626]"></div>
            <span className="ml-auto text-[8px] text-slate-500 font-mono tracking-widest uppercase">System_Link: Stable</span>
        </div>
        
        {/* Header - White text with Green Icon */}
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-500/10 rounded-sm">
                <Cpu size={20} className="text-green-500"/>
            </div>
            <div>
                <h4 className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Telemetry Feed</h4>
                <p className="text-[8px] text-slate-500 font-mono uppercase">Node_ID: ZX-99</p>
            </div>
        </div>
        
        {/* Status List - Mixed Palette */}
        <div className="space-y-4 font-mono text-[10px]">
            <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">PLC_MASTER_01</span>
                <span className="text-white bg-green-500/10 px-2 py-0.5 rounded-sm text-[9px] font-bold">RUNNING</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">SCADA_SYNC</span>
                <span className="text-green-500 font-bold">ACTIVE</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">BEMS_01</span>
                <span className="text-slate-700">IDLE</span>
            </div>
            <div className="flex justify-between pt-2">
                <span className="text-white font-bold tracking-tighter">GRID_STABILITY</span>
                <span className="text-green-500 font-bold bg-green-500/5 px-2">99.8%</span>
            </div>
        </div>

        {/* Decorative footer element */}
        <div className="mt-8 h-1 w-full bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-3/4 shadow-[0_0_10px_#22c55e]"></div>
        </div>
    </div>
</div>
        </section>
    )
}

export default Hero