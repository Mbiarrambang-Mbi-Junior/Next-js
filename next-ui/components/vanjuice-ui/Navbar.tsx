"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import VanJuice from './VanJuice';
import NextLink from 'next/link';
import * as Scroll from 'react-scroll';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from './ThemeContext'; // Ensure this path is correct

const ScrollLink = Scroll.Link;

function Navbar() {
    // 1. Pull both theme and setTheme from your context
    const { theme, setTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/vanjuice";

    // 2. Function to toggle between the two keys in your JSON
    const toggleTheme = () => {
        setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
    };

    const navLinks = [
        { id: "hero", label: "Home", type: "scroll" },
        { id: "about", label: "About", type: "scroll" },
        { id: "services", label: "Services", type: "scroll" },
        { id: "contact", label: "Contact", type: "scroll" },
        { id: "blog", label: "Blog", type: "route", path: "/vanjuice/vanjuice-blog" },
    ];

    // Dynamic classes based on theme
    const isDark = theme === "darkTheme";
    const headerClass = `fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm transition-colors duration-300 ${
        isDark ? "bg-gray-900/80 border-b border-gray-800" : "bg-white/80"
    }`;
    const linkClass = `cursor-pointer transition-colors font-medium px-2 py-1 relative group ${
        isDark ? "text-gray-200 hover:text-orange-400" : "text-gray-800 hover:text-orange-600"
    }`;

    return (
        <header className={headerClass}>
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                
                <NextLink href="/vanjuice" className="flex items-center gap-2 z-10">
                    <VanJuice />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                        VanJuice
                    </span>
                </NextLink>

                {/* Desktop Nav */}
                <nav className="hidden md:block z-10">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                {link.type === "route" ? (
                                    <NextLink href={link.path || "/"} className={linkClass}>
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                                    </NextLink>
                                ) : isHomePage ? (
                                    <ScrollLink
                                        to={link.id}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                        activeClass="text-orange-500"
                                        className={linkClass}
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                                    </ScrollLink>
                                ) : (
                                    <NextLink href={`/#${link.id}`} className={linkClass}>
                                        {link.label}
                                    </NextLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-4 z-10">
                    {/* 3. Theme Toggle Button */}
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all ${isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
                    >
                        {isDark ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                    </button>

                    <NextLink href="/view-menu" className={`${isDark ? "text-gray-300" : "text-gray-600"} font-semibold hover:text-orange-500 transition-colors`}>
                        Order Now
                    </NextLink>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button onClick={toggleTheme} className="p-2">
                        {isDark ? <HiSun className="text-yellow-400 text-2xl" /> : <HiMoon className="text-gray-600 text-2xl" />}
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <HiX className={`text-2xl ${isDark ? "text-white" : "text-gray-800"}`} />
                        ) : (
                            <HiMenu className="text-2xl text-orange-500" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 h-screen z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } ${isDark ? "bg-gray-900" : "bg-white/95 backdrop-blur-lg"}`}>
                <ul className="flex flex-col items-center gap-8 text-xl">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NextLink 
                                href={link.type === "route" ? (link.path || "/") : `/#${link.id}`} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className={`font-bold ${isDark ? "text-white" : "text-gray-800"}`}
                            >
                                {link.label}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;