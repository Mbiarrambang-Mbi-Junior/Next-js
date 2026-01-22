"use client"
import { useState } from "react";
import { Link } from "react-scroll";
import pageData from "@/utils/1pageData.json"
import { BsPerson, BsSearch, BsCart, BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar" className="w-full bg-white h-20 flex items-center sticky top-0 z-50 border-b">
      <header className="flex w-full items-center justify-between px-6 md:px-10 lg:px-20">

        {/* Logo */}
        <div className="logo text-xl font-bold z-[60]">
          {pageData.Metadata.title}
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {pageData.navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href.replace("#", "")} // Remove '#' if it exists in your JSON href
                  smooth={true}
                  duration={500}
                  offset={-80} // Offset for the fixed header height
                  className="hover:text-blue-600 cursor-pointer transition-colors font-medium text-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4 md:gap-6 text-xl">
          <div className="hidden sm:flex gap-4">
            <BsSearch className="cursor-pointer hover:text-blue-600 transition-colors" />
            <BsPerson className="cursor-pointer hover:text-blue-600 transition-colors" />
          </div>
          <div className="relative">
            <BsCart className="cursor-pointer hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          {/* Hamburger Button - Only visible on mobile */}
          <button
            className="md:hidden z-[60] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BsX /> : <BsList />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col items-center gap-8 text-xl font-semibold">
            {pageData.navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-8 mt-12 text-2xl">
            <BsSearch />
            <BsPerson />
          </div>
        </div>

      </header>
    </section>
  )
}

export default Navbar