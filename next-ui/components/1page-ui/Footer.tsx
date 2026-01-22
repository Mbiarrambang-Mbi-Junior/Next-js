"use client"
import pageData from "../../utils/1pageData.json"
import Link from "next/link"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <footer id="footer" className="w-full bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-1 space-y-6">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {pageData.Metadata.title}
            </h1>
            <p className="text-sm leading-relaxed">
              {pageData.Metadata.description}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-4">
              {pageData.navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support/Extra Links Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Support</h2>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-400">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Safety Center</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Community Guidelines</Link></li>
            </ul>
          </div>

          {/* Social Icons Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Connect With Us</h2>
            <div className="flex gap-4">
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <BsFacebook size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all">
                <BsTwitter size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all">
                <BsInstagram size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-800 hover:text-white transition-all">
                <BsLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider">
          <p>© 2025 {pageData.Metadata.title}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer