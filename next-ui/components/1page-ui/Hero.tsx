"use client"
import pageData from "@/utils/1pageData.json"

function Hero() {
  return (
    /* Changed: Removed top padding (pt-0) and reduced vertical padding */
    <section id="home" className="w-full  px-4 md:px-10 lg:px-20 pt-0 pb-10 md:pb-20">
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pageData.images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }} 
        /* Changed: Added mt-4 to give just a tiny bit of breathing room below the fixed nav */
        className="hero-content w-full md:min-h-[70vh] mt-4 flex flex-col items-center justify-center text-center md:p-12"
      >
        <div className="hero-text mb-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Seamless Control
          </h1>
        </div>

        <div className="description max-w-2xl mb-8">
          <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed">
            Experience the future of automation with our integrated hardware solutions designed for maximum efficiency.
          </p>
        </div>

        <div className="hero-button flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg active:scale-95">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/30 transition-all active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero