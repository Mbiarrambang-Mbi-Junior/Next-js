"use client"

import { useState, useEffect } from "react"
import ZenithElectric from "./ZenithElectric"
import data from "@/utils/data.json"
import Link from "next/link"
import { Search, Menu, X, Globe } from "lucide-react"

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                isScrolled 
                ? "bg-[#0b0e14]/95 backdrop-blur-md py-3 border-green-500/10 shadow-2xl" 
                : "bg-transparent py-5 border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto md:px-12 px-6 flex justify-between items-center">
                
                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <ZenithElectric />
                    </Link>

                    {/* Desktop Search Bar - Updated to Green focus */}
                    <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 gap-2 group focus-within:border-green-500/50 transition-all">
                        <Search size={14} className="text-slate-500 group-focus-within:text-green-500" />
                        <input 
                            type="text" 
                            placeholder="Search docs..." 
                            className="bg-transparent text-xs text-slate-300 outline-none w-32 placeholder:text-slate-600 font-mono"
                        />
                        <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-500 font-mono">/</span>
                    </div>
                </div>
                
                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex items-center space-x-8 border-r border-white/10 pr-8">
                        {data.navLinks.map((navLink) => (
                            <li key={navLink.name}>
                                <Link 
                                    href={navLink.link}
                                    className="relative group text-[13px] capitalize tracking-wide text-slate-400 hover:text-white transition-colors duration-200 py-2"
                                >
                                    {navLink.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="text-slate-400 hover:text-green-500 transition-colors flex items-center gap-2">
                        <Globe size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-mono">EN</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white p-2 relative z-[70] hover:text-green-500 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - GLOSSY MORPHISM STYLE with Green accents */}
            <div className={`fixed inset-0 z-[60] transition-all duration-500 ${
                mobileMenuOpen 
                ? "opacity-100 pointer-events-auto" 
                : "opacity-0 pointer-events-none translate-y-[-10px]"
            } md:hidden`}>
                {/* The "Glass" Layer */}
                <div className="absolute inset-0 bg-[#0b0e14]/40 backdrop-blur-xl border-b border-green-500/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"></div>
                
                {/* Content */}
                <div className="relative p-8 flex flex-col h-full pt-24">
                    <ul className="space-y-8">
                        {data.navLinks.map((navLink, idx) => (
                            <li 
                                key={navLink.name}
                                className={`transition-all duration-500 delay-${idx * 100} ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                            >
                                <Link 
                                    onClick={() => setMobileMenuOpen(false)}
                                    href={navLink.link}
                                    className="text-4xl capitalize tracking-tight text-white hover:text-green-500 transition-colors flex items-center justify-between group italic uppercase"
                                >
                                    {navLink.name}
                                    <span className="w-12 h-[1px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right shadow-[0_0_8px_#22c55e]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-auto pt-8 border-t border-green-500/10 bg-green-500/[0.02] -mx-8 px-8 backdrop-blur-md">
                        <p className="text-[10px] text-green-500 tracking-[0.3em] mb-4 uppercase font-bold">Engineering Support</p>
                        <p className="text-white font-mono text-sm hover:text-green-400 transition-colors cursor-pointer">projects@zenithelectric.cm</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar