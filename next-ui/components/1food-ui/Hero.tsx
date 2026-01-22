"use client"
import data from "@/utils/1foodData.json";
import Link from "next/link";

function Hero() {
  return (
    // Changed: Added min-h-screen instead of fixed h-screen
    // Changed: grid-cols-1 for mobile, md:grid-cols-2 for desktop
    <section className="mt-20 md:mt-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10">
        
        {/* Text Content: Centered on mobile, Left-aligned on desktop */}
        <div className="flex flex-col order-2 md:order-1 text-center md:text-left">
            <div className="hero-text">
                {/* Responsive font sizes: text-4xl on mobile, text-6xl on desktop */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    {data.heroContent.title}
                </h1>
                <p className="text-lg md:text-xl mt-4 text-gray-700">
                    {data.heroContent.description}
                </p>
            </div>

            {/* Button Container: Full width on mobile, 3/5 on desktop */}
            <div className="hero-button flex flex-col sm:flex-row justify-center md:justify-start w-full md:w-4/5 mt-10 gap-4">
                <Link
                    className="rounded-full py-4 px-8 font-bold shadow-lg transition-transform hover:scale-105"
                    style={{
                        backgroundColor: data.themes.lightTheme.color.buttonBg1,
                        color: data.themes.lightTheme.color.primary
                    }}
                    href="/food-menu"
                >
                    Food Menu
                </Link>
                <button 
                    className="rounded-full py-4 px-8 font-bold shadow-lg transition-transform hover:scale-105"
                    style={{
                        backgroundColor: data.themes.lightTheme.color.buttonBg2,
                        color: data.themes.lightTheme.color.primary
                    }}
                >
                    Book a Table
                </button>
            </div>
        </div>

        {/* Image: Appears on top on mobile due to 'order-1' */}
        <div className="flex justify-center order-1 md:order-2">
            <img 
                src={data.images[0].url} 
                alt={data.images[0].alt} 
                className="w-full max-w-[300px] md:max-w-full h-auto drop-shadow-2xl" 
            />
        </div>
    </section>
  )
}

export default Hero