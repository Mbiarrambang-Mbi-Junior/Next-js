"use client"
import { Instagram, Facebook, Youtube } from 'lucide-react';

function Footer() {
  return (
   <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>Coffee Beans</li>
              <li>Brewing Kits</li>
              <li>Merchandise</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Category</h4>
            <ul className="space-y-3 text-sm">
              <li>Dark Roast</li>
              <li>Light Roast</li>
              <li>Weekly Pick</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company Info</h4>
            <ul className="space-y-3 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Follow us</h4>
            <div className="flex gap-4">
              <Instagram size={20} className="hover:text-white cursor-pointer" />
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Youtube size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600">
          © 2024 Lofty Solutions. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer