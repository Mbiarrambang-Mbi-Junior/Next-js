"use client"
import { Link } from "react-scroll";
import Food from "./Food";
import { Link as ScrollLink } from "react-scroll"; // Alias to avoid confusion
import NextLink from "next/link";               // Standard Next.js routing
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isHome = pathname === "/";

    const handleLogoClick = () => {
        setIsOpen(false);
        if (!isHome) {
            router.push("/"); // Force navigation to home page if we aren't there
        }
    };

    const navLinks = [
        { name: "Home", path: "home" },
        { name: "Toplist", path: "toplist" },
        { name: "Best", path: "best" },
        { name: "Services", path: "services" }
    ];

    return (
        <section className="flex justify-between items-center w-full px-6 md:px-20 py-2 backdrop-blur-sm bg-white/50 border-b-2 border-gray-200 fixed top-0 z-50">

            {/* Logo Link: Always scrolls to the top section with id="home" */}
            {isHome ? (
                <ScrollLink
                    to="home"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex items-center justify-center cursor-pointer group"
                >
                    <Food />
                    <span className="font-bold group-hover:text-blue-500 transition-colors">1Food</span>
                </ScrollLink>
            ) : (
                <NextLink
                    href="/"
                    onClick={handleLogoClick}
                    className="flex items-center justify-center cursor-pointer group"
                >
                    <Food />
                    <span className="font-bold group-hover:text-blue-500 transition-colors">1Food</span>
                </NextLink>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 font-medium transition-colors"
                        activeClass="text-blue-500 font-bold" // Visually indicates active section
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX size={25} /> : <HiMenu size={25} />}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-white flex flex-col items-center py-8 gap-6 md:hidden border-b shadow-2xl animate-in slide-in-from-top-5 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setIsOpen(false)} // Closes menu after clicking
                            className="cursor-pointer text-xl font-semibold hover:text-blue-500 active:text-blue-600 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Navbar;