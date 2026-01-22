"use client"
import { Link } from "react-scroll";
import VanJuice from "./VanJuice";
import { useState } from "react";
import data from "@/utils/vanjuiceData.json"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  // Destructure colors for cleaner access
  const themeColors = data.themes.lightTheme.colors;

  return (
    <footer
      style={{ backgroundColor: themeColors.footer }}
      className="text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <VanJuice />
              <span
                className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColors.gradientText.from}, ${themeColors.gradientText.to})`
                }}
              >
                {data.heroContent.content.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {data.aboutContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-lg font-bold"
              style={{ color: themeColors.orange }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {["home", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ color: isHovered ? themeColors.orange : "#9ca3af" }} // gray-400 hex
                    className="cursor-pointer capitalize transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold" style={{ color: themeColors.orange }}>Follow Us</h3>
            <div className="flex gap-4">
              {[BsFacebook, BsTwitter, BsInstagram, BsLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-full transition-colors group"
                  style={{ 'backgroundColor': themeColors.orange }}
                >
                  <Icon className="text-xl group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold" style={{ color: themeColors.orange }}>Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe for latest updates and offers.
            </p>
            <div
              className="flex bg-gray-800 rounded-lg overflow-hidden p-1 transition-all focus-within:ring-2"
              style={{ borderColor: themeColors.orange }}
            >
              <input
                type="email"
                placeholder="Email..."
                className="bg-transparent text-white px-3 w-full outline-none placeholder-gray-500"
              />
              <button
                className="text-white px-4 py-2 rounded-md font-bold text-sm transition-colors"
                style={{ backgroundColor: themeColors.orange }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {currentYear} {data.heroContent.content.name} Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer