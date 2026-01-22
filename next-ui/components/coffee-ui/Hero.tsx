"use client"
import React from 'react'
import Image from 'next/image'
import coffeeData from "@/utils/coffeeData.json"

function Hero() {
  const { images } = coffeeData;

  return (
   <section className="relative bg-[#1e1e1e] text-white pt-10 md:pt-6 pb-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 z-10 text-center md:text-left">
            <h2 className="text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 text-sm md:text-base">Freshly Roasted</h2>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-none">COFFEE</h1>
            <button className="bg-white text-black px-8 md:px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition active:scale-95">
              Shop now
            </button>
          </div>
          
          <div className="w-full md:w-1/2 relative flex justify-center">
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-amber-900 to-transparent blur-3xl absolute -z-10 opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             <img src={images[0].url} alt={images[0].alt} className="w-full max-w-[280px] md:max-w-md object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Responsive Wave Height */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>
  )
}

export default Hero