"use client"

import { useState, useEffect } from "react"
import Chadash from "./ChadashAutomation"
import data from "@/utils/data.json"
import Link from "next/link"
import { Search, Menu, X, Moon, Sun } from "lucide-react"

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

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
                ? "bg-[color:var(--surface)]/95 backdrop-blur-md py-3 border-[color:var(--border)] shadow-[0_20px_60px_rgba(15,23,42,0.12)]" 
                : "bg-transparent py-5 border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto md:px-12 px-6 flex justify-between items-center">
                
                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <Chadash />
                    </Link>

                    {/* Desktop Search Bar - Updated to accent focus */}
                    <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 gap-2 group focus-within:border-[color:var(--accent)]/50 transition-all">
                        <Search size={14} className="text-slate-500 group-focus-within:text-[color:var(--accent)]" />
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
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="text-slate-400 hover:text-[color:var(--accent)] transition-colors flex items-center justify-center gap-2 rounded-full p-2"
                        type="button"
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white p-2 relative z-70 hover:text-green-500 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - GLOSSY MORPHISM STYLE with Green accents */}
            <div className={`fixed inset-0 z-60 transition-all duration-500 ${
                mobileMenuOpen 
                ? "opacity-100 pointer-events-auto" 
                : "opacity-0 pointer-events-none -translate-y-2.5"
            } md:hidden`}>
                {/* The "Glass" Layer */}
                <div className="absolute inset-0 bg-[color:var(--surface)]/20 backdrop-blur-xl border-b border-[color:var(--accent)]/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]"></div>
                
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
                                    className="text-4xl uppercase tracking-tight text-white hover:text-[color:var(--accent)] transition-colors flex items-center justify-between group italic"
                                >
                                    {navLink.name}
                                    <span className="w-12 h-1px bg-[color:var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-right shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-auto pt-8 border-t border-[color:var(--accent)]/10 bg-[color:var(--accent)]/20 -mx-8 px-8 backdrop-blur-md">
                        <p className="text-[10px] text-[color:var(--accent)] tracking-[0.3em] mb-4 uppercase font-bold">Engineering Support</p>
                        <p className="text-white font-mono text-sm hover:text-green-400 transition-colors cursor-pointer">projects@zenithelectric.cm</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
