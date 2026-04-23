"use client"

import React from 'react';
import { Zap, ArrowRight, Cpu } from "lucide-react";


export default function Hero() {
    return (
        <section className="relative flex flex-col lg:flex-row min-h-screen lg:h-screen w-full text-[color:var(--accent)] px-6 md:px-12 lg:px-20 pt-16 lg:pt-20 pb-20 lg:pb-0 overflow-hidden">

            {/* VIDEO BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>
                {/* OVERLAY: Adjust opacity (e.g., bg-black/60) to make video more or less visible */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            {/* LEFT SIDE: Content Area */}
            {/* Removed bg-[#0b0e14] to let video show */}
            <div className="flex-1 flex flex-col justify-center z-10">
                <div className="w-full max-w-2xl">

                    {/* Technical Tagline */}
                    <div className="flex items-center gap-3 mb-6 md:mb-8 text-green-500">
                        <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                            <Zap size={20} className="fill-green-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em]">
                            Chadash Automation
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-xl md:text-xl lg:text-3xl mb-6 md:mb-8 tracking-tighter leading-[1.1] lg:leading-[0.9] uppercase italic text-[color:var(--accent)]">
                        innovate, automate, control and efficiency.
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white mb-10 md:mb-12 leading-relaxed max-w-xl border-l-2 border-[color:var(--accent)] pl-6 md:pl-8">
                        Deploying IEC-compliant automation and industrial power solutions
                        across the ecosystem in Buea.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="w-full sm:w-auto hover:bg-[color:var(--accent)] text-[color:var(--accent)] px-8 py-4 cursor-pointer rounded-md capitalize tracking-widest bg-black/50 backdrop-blur-md border-2 border-[color:var(--accent)] hover:text-black transition-all shadow-[0_0_40px_rgba(34,197,94,0.35)] active:scale-95 flex items-center justify-center gap-4 group">
                            Initialize Project
                            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Visual/Telemetry Area */}
            {/* Removed bg-[#0b0e14] to let video show */}
            <div className="flex-1 flex items-center justify-center relative mt-16 lg:mt-0 z-10">

                {/* Background Decoration - Mixed Green and Gray Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#22c55e12_1px,transparent_1px)] bg-size[40px_40px]"></div>

                {/* Technical "Telemetry" Card */}
                <div className="relative z-10 bg-[#0b0e14]/80 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-sm shadow-[0_0_50px_rgba(34,197,94,0.1)] w-full max-w-[320px] md:max-w-sm max-h-115 overflow-hidden">

                    <div className="mb-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Project showcase</p>
                        <h4 className="text-white text-lg font-semibold mt-2">Static previews for calm first impressions</h4>
                        <p className="text-[11px] text-slate-400 mt-2 leading-5">
                        This keeps the hero clean, readable, and focused.
                        </p>
                    </div>

                    <div className="space-y-4 font-sans text-sm">
                        <div className="grid gap-3">
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-sm">
                                <img
                                    src="/CHADASH-AUTOMATION.jpeg"
                                    alt="Chadash Automation project"
                                    className="w-full h-20 object-cover"
                                />
                                <div className="p-3">
                                    <p className="text-sm font-semibold text-white">Automation dashboard</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Energy management UI</p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
                                <p className="text-sm font-semibold text-white">Industrial control integration</p>
                                <p className="text-[10px] text-slate-400 leading-5">
                                    Showcase static project highlights rather than another moving slider. It helps first-time visitors focus while the background video supports atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-[color:var(--accent)] w-3/4 shadow-[0_0_10px_rgba(34,197,94,0.35)]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}