"use client"
import upstartData from "@/utils/upstartData.json"
import { Link } from "react-scroll"
import { useState } from "react"
import { Menu, X } from "lucide-react" // Make sure to install lucide-react or use react-icons
import Upstart from "./Upstart"

function Navbar() {
    const { themes, navLinks } = upstartData;
    const { lightTheme } = themes;
    const [toggle, setToggle] = useState(false);

    return (
        <header 
            style={{
                backgroundColor: `${lightTheme.color.primary}E6`, 
                color: lightTheme.color.secondary,
                backdropFilter: "blur(10px)" 
            }}
            className="flex items-center justify-between px-6 md:px-20 h-20 sticky top-0 z-[100] transition-all duration-300"
        >
            {/* Logo Section */}
            <div className="logo cursor-pointer transform hover:scale-105 transition-transform">
                <Upstart />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <div className="flex gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.id} 
                            to={link.href.replace('#', '')} 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                            activeClass="opacity-100 font-bold border-b-2"
                            className="text-sm uppercase tracking-widest opacity-70 hover:opacity-100 cursor-pointer transition-all border-transparent"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="login">
                    <button 
                        style={{
                            backgroundColor: lightTheme.color.secondary,
                            color: lightTheme.color.primary
                        }}
                        className="px-6 py-2 rounded-full font-bold text-xs tracking-tighter hover:shadow-lg transition-all active:scale-95"
                    >
                        LOREM
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setToggle(!toggle)}
                    className="text-3xl transition-all focus:outline-none"
                >
                    {toggle ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed top-[80px] left-0 w-full h-screen md:hidden transition-all duration-500 ease-in-out ${
                    toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{ 
                    backgroundColor: lightTheme.color.primary,
                    borderTop: `1px solid ${lightTheme.color.secondary}20` 
                }}
            >
                <div className="flex flex-col items-center gap-10 py-20">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.id} 
                            to={link.href.replace('#', '')} 
                            smooth={true} 
                            duration={500}
                            onClick={() => setToggle(false)} // Close menu on click
                            className="text-2xl font-semibold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    <button 
                        style={{
                            backgroundColor: lightTheme.color.secondary,
                            color: lightTheme.color.primary
                        }}
                        className="mt-4 px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
                        onClick={() => setToggle(false)}
                    >
                        LOREM
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar