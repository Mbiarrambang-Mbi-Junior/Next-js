"use client"
import { useRef } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import data from "@/utils/vanjuiceData.json"

function Contact({ id, colors }: { id: string; colors: any }) {
  // Determine if we are in dark mode for contrasting text
  const isDark = colors.primary === "#101828";

  return (
    <section
      id={id}
      style={{ backgroundColor: colors.contact }}
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 transition-colors duration-500"
    >
      <h2 
        style={{ color: isDark ? "#ffffff" : colors.footer }} 
        className="text-4xl font-bold mb-12"
      >
        Contact Us
      </h2>

      <div className="contact-content container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        
        {/* Contact Info Card */}
        <div 
          className={`${
            isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } flex flex-col gap-8 p-8 rounded-2xl shadow-lg h-full transition-colors`}
        >
          <h3 
            style={{ 
              backgroundImage: `linear-gradient(to right, ${colors.gradientText.from}, ${colors.gradientText.to})` 
            }}
            className="text-2xl font-bold bg-clip-text text-transparent"
          >
            Get in Touch
          </h3>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            Have questions about our juices or want to place a bulk order? We'd
            love to hear from you! Fill out the form or reach us via the details
            below.
          </p>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div 
              style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }} 
              className="p-3 rounded-full"
            >
              <BsGeoAlt size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Our Location</h4>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {data.contactContent.location}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div 
              style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }} 
              className="p-3 rounded-full"
            >
              <BsTelephone size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {data.contactContent.phone}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div 
              style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }} 
              className="p-3 rounded-full"
            >
              <BsEnvelope size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {data.contactContent.email}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <form 
          className={`${
            isDark ? "bg-gray-800" : "bg-white"
          } flex flex-col gap-6 p-8 rounded-2xl shadow-lg transition-colors`}
        >
          <h3 style={{ color: isDark ? "#ffffff" : "#1f2937" }} className="text-2xl font-bold">
            Send us a Message
          </h3>

          <div className="flex flex-col gap-2">
            <label className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                isDark 
                  ? "bg-gray-700 border-gray-600 text-white focus:border-orange-500" 
                  : "bg-white border-gray-300 text-gray-900 focus:border-orange-500"
              }`}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                isDark 
                  ? "bg-gray-700 border-gray-600 text-white focus:border-orange-500" 
                  : "bg-white border-gray-300 text-gray-900 focus:border-orange-500"
              }`}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Message
            </label>
            <textarea
              placeholder="Your message here..."
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none h-32 ${
                isDark 
                  ? "bg-gray-700 border-gray-600 text-white focus:border-orange-500" 
                  : "bg-white border-gray-300 text-gray-900 focus:border-orange-500"
              }`}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            style={{ 
              borderColor: colors.orange, 
              color: colors.orange,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.color = colors.primary;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = colors.orange;
            }}
            className="mt-2 py-3 px-6 border-2 font-bold rounded-lg shadow-md transform transition-all active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;