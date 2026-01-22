"use client"
import { BsCpu, BsLightningCharge, BsGearWideConnected, BsToggleOn } from "react-icons/bs"

function Services() {
  return (
    // Changed: removed container limits and added w-full
    <section id="services" className="w-full py-16  bg-black">
      <div className="w-full px-4 md:px-10 lg:px-20">

        {/* Changed: ensures the grid spans 100% of the parent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Card 1: Automation */}
          <div className="p-10 rounded-3xl flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
            <BsCpu className="text-5xl mb-6 text-blue-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-xl mb-3">Web Development</h3>
          </div>

          {/* Card 2: Performance */}
          <div className="p-10 rounded-3xl flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
            <BsLightningCharge className="text-5xl mb-6 text-yellow-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-xl mb-3">Mobile Development</h3>
          </div>

          {/* Card 3: Control */}
          <div className="p-10 rounded-3xl flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
            <BsGearWideConnected className="text-5xl mb-6 text-purple-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-xl mb-3">Digital Marketing</h3>
          </div>

          {/* Card 4: Seamless SEO */}
          <div className="p-10 rounded-3xl flex flex-col items-center bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
            <BsToggleOn className="text-5xl mb-6 text-green-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-xl mb-3">SEO Optimization</h3>
            <p className="text-gray-500 text-center text-sm">Smart automation for search dominance.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services