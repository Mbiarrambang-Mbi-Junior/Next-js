"use client"

import { useState, useEffect } from "react"
import data from "../utils/data.json"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

function CustomProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const customProducts = data.customProducts;
              
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === customProducts.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(timer);
    }, [customProducts.length]);

    const activeProduct = customProducts[currentIndex];

    return (
        <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
            {/* Background Digital Grid - Updated to Green-500 tint */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#22c55e 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[1px] bg-green-600"></span>
                        <h2 className="text-green-500 tracking-[0.5em] text-[10px] uppercase font-medium">Hardware Catalog</h2>
                        <span className="w-8 h-[1px] bg-green-600"></span>
                    </div>
                    <h3 className="text-4xl md:text-5xl text-white uppercase italic tracking-tighter leading-none text-center">
                        Technical <span className="text-green-500 text-shadow-glow">Components</span>
                    </h3>
                </div>

                {/* Main Carousel Card */}
                <div className="bg-[#0d111a] border border-green-500/10 relative group overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        
                        {/* Left Side: Product Image */}
                        <div className="relative p-8 flex items-center justify-center bg-black/40">
                            <div className="relative w-full max-w-[320px] aspect-square overflow-hidden border border-green-500/20 rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                                <Image 
                                    key={activeProduct.id}
                                    src={activeProduct.image} 
                                    alt={activeProduct.name} 
                                    fill
                                    className="object-cover transition-all duration-1000 scale-100 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    priority
                                />
                                {/* Industrial HUD Accents */}
                                <div className="absolute inset-0 border-[8px] border-[#0d111a] pointer-events-none"></div>
                                <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                                <div className="absolute bottom-2 right-2 flex gap-1">
                                    <div className="w-1 h-3 bg-green-500/30"></div>
                                    <div className="w-1 h-3 bg-green-500/60"></div>
                                    <div className="w-1 h-3 bg-green-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Product Details */}
                        <div className="p-10 flex flex-col justify-center border-l border-green-500/5 relative">
                             {/* Technical ID Watermark */}
                            <span className="absolute top-4 right-8 text-6xl font-mono font-black text-green-500/[0.03] pointer-events-none">
                                {activeProduct.id}
                            </span>

                            <h4 className="text-2xl text-white mb-4 uppercase italic tracking-tight font-light group-hover:text-green-400 transition-colors">
                                {activeProduct.name}
                            </h4>
                            <p className="text-gray-500/60 mb-8 text-sm leading-relaxed font-light tracking-wide min-h-[60px]">
                                {activeProduct.description}
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <button className="px-4 py-2 border border-green-500/30 text-green-500 text-[10px] uppercase tracking-[0.2em] hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center gap-2 group/btn">
                                    Analyze Specs 
                                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                                <span className="text-[10px] font-mono text-green-900 uppercase">Status: Optimal</span>
                            </div>
                        </div>
                    </div>

                    {/* Auto-play Progress Bar - Updated to Green-500 */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/10">
                        <div 
                            className="h-full bg-green-500 shadow-[0_0_15px_#22c55e] transition-all duration-[4000ms] ease-linear"
                            style={{ width: `${((currentIndex + 1) / customProducts.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Navigation Pips */}
                <div className="flex justify-center gap-3 mt-8">
                    {customProducts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-[3px] transition-all duration-500 ${index === currentIndex ? "w-8 bg-green-500 shadow-[0_0_8px_#22c55e]" : "w-4 bg-green-950/40 hover:bg-green-500/30"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomProducts