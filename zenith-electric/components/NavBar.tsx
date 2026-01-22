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
                ? "bg-[#0b0e14]/95 backdrop-blur-md py-3 border-white/10 shadow-2xl" 
                : "bg-transparent py-5 border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto md:px-12 flex justify-between items-center">
                
                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <ZenithElectric />
                    </Link>

                    {/* Desktop Search Bar */}
                    <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 gap-2 group focus-within:border-blue-500/50 transition-all">
                        <Search size={14} className="text-slate-500 group-focus-within:text-blue-500" />
                        <input 
                            type="text" 
                            placeholder="Search docs..." 
                            className="bg-transparent text-xs text-slate-300 outline-none w-32 placeholder:text-slate-600"
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
                                    
                                    {/* AFTER EFFECT: Animated Underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Technical Language/Region Selector */}
                    <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Globe size={16} />
                        <span className="text-[10px] uppercase tracking-widest">EN</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0b0e14] z-[60] transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <ZenithElectric />
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                            <X size={32} />
                        </button>
                    </div>
                    <ul className="space-y-8">
                        {data.navLinks.map((navLink) => (
                            <li key={navLink.name}>
                                <Link 
                                    onClick={() => setMobileMenuOpen(false)}
                                    href={navLink.link}
                                    className="text-3xl capitalize tracking-tight text-white hover:text-blue-500 transition-colors"
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-8 border-t border-white/5">
                        <p className="text-xs text-slate-500 tracking-widest mb-4 uppercase">Engineering Support</p>
                        <p className="text-white">projects@zenithelectric.cm</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar