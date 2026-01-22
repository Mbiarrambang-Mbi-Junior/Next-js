"use client"
import data from "@/utils/1foodData.json"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa' // npm install react-icons

function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.3)"
      }}
      className="w-full mt-20 py-12 px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Branding Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">1Food</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {data.heroContent.description.slice(0, 100)}...
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Menu</li>
            <li className="hover:text-black cursor-pointer">Services</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Fast Delivery</li>
            <li>Quality Food</li>
            <li>24/7 Support</li>
            <li>Custom Catering</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-6">
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform">
                <FaFacebookF />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform">
                <FaTwitter />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform">
                <FaInstagram />
            </div>
          </div>
          <p className="text-xs text-gray-500">
            © 2024 1Food. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer