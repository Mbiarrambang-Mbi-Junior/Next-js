"use client"
import { BsMotherboard, BsLightbulb, BsBell, BsShield, BsGoogle, BsGooglePlay, BsGem } from "react-icons/bs"
import pageData from "@/utils/1pageData.json"

function Product() {
  return (
    <section id="products" className="w-full py-12 md:py-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Experience seamless integration and advanced automation with our cutting-edge hardware solutions.
        </p>
      </div>

      {/* Main Container: Stacks on Mobile, 3 Columns on LG screens */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Features 1 & 2 (Order 2 on mobile to sit below image, Order 1 on LG) */}
        <div className="flex flex-col gap-8 md:gap-12 order-2 lg:order-1">
          <div className="group flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="p-4 bg-blue-50 rounded-2xl mb-4 group-hover:bg-blue-600 transition-colors">
              <BsMotherboard className="text-3xl md:text-4xl text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Advanced Processing</h3>
            <p className="text-gray-500 text-xs md:text-sm">Industrial grade motherboards for 24/7 automation reliability.</p>
          </div>

          <div className="group flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="p-4 bg-yellow-50 rounded-2xl mb-4 group-hover:bg-yellow-500 transition-colors">
              <BsLightbulb className="text-3xl md:text-4xl text-yellow-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Smart Lighting</h3>
            <p className="text-gray-500 text-xs md:text-sm">Adaptive brightness control based on environmental data.</p>
          </div>
        </div>

        {/* Center Column: Product Image (Order 1 on mobile to stay at the top) */}
        <div className="order-1 lg:order-2">
          <div 
            style={{
              backgroundImage: `url(${pageData.images[2].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[30px] md:rounded-[40px] shadow-2xl border-4 md:border-8 border-gray-50"
          >
            <div className="w-full h-full bg-black/5 rounded-[26px] md:rounded-[32px]"></div>
          </div>
        </div>

        {/* Right Column: Features 3 & 4 (Order 3) */}
        <div className="flex flex-col gap-8 md:gap-12 order-3">
          <div className="group flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-4 bg-red-50 rounded-2xl mb-4 group-hover:bg-red-500 transition-colors">
              <BsBell className="text-3xl md:text-4xl text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Real-time Alerts</h3>
            <p className="text-gray-500 text-xs md:text-sm">Instant notifications via seamless cloud synchronization.</p>
          </div>

          <div className="group flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-4 bg-green-50 rounded-2xl mb-4 group-hover:bg-green-600 transition-colors">
              <BsShield className="text-3xl md:text-4xl text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Secure Control</h3>
            <p className="text-gray-500 text-xs md:text-sm">End-to-end encrypted signals for total system protection.</p>
          </div>
        </div>
      </div>

      {/* Sponsors Section: Fully Responsive */}
      <div className="mt-20 pt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-700">
              <BsGoogle className="text-blue-500" />
              <span>Google</span>
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-700">
              <BsGooglePlay className="text-green-500" />
              <span>Play Store</span>
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-700">
              <BsGem className="text-purple-500" />
              <span>Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product