"use client"
import { Search, Menu, X } from "lucide-react" 
import coffeeData from "@/utils/coffeeData.json"
import { Link } from "react-scroll"
import { useState } from "react"

function Navbar() {
    const { themes } = coffeeData;
    const [isOpen, setIsOpen] = useState(false);
    const primaryColor = themes?.lightTheme?.color?.primary || "#1e1e1e";
    const secondaryColor = themes?.lightTheme?.color?.secondary || "#ffffff";

    return (
        <header 
            style={{ backgroundColor: primaryColor, color: secondaryColor }}
            className="sticky top-0 z-[100] w-full shadow-md"
        >
            <nav className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer z-[110]">
                    <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-xl">☕</div>
                    <span className="font-bold tracking-tighter text-xl md:text-2xl uppercase">
                        {coffeeData.Metadata.title}
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {coffeeData.navLinks.map((link) => (
                        <Link key={link.id} to={link.href.replace('#', '')} smooth={true} spy={true} offset={-80}
                            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-amber-200 cursor-pointer transition-all">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Search size={22} className="cursor-pointer" />
                    {/* Mobile Toggle */}
                    <button className="md:hidden z-[110]" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#1e1e1e] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {coffeeData.navLinks.map((link) => (
                        <Link key={link.id} to={link.href.replace('#', '')} smooth={true} onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold uppercase tracking-widest">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
export default Navbar