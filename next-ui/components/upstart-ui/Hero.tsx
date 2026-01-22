"use client"
import upstartData from "@/utils/upstartData.json"

function Hero() {
    const { heroContent, themes } = upstartData;
    const { lightTheme } = themes;

    return (
        <section id="hero" className="px-10 py-20 min-h-[100vh] flex items-center justify-center">
            {/* Added text-center here to align all children text */}
            <div className="max-w-4xl flex flex-col items-center justify-center gap-6 text-center">
                
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    {heroContent.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium opacity-90">
                    {heroContent.subTitle}
                </h2>
                
                <p className="max-w-2xl text-lg leading-relaxed">
                    {heroContent.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <button
                        className="px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
                        style={{
                            backgroundColor: lightTheme.color.secondary,
                            color: lightTheme.color.primary,
                            border: "2px solid " + lightTheme.color.primary
                        }}
                    >
                        lorem ipsum
                    </button>
                    <button
                        className="px-8 py-3 rounded-full font-semibold border-2 transition-transform hover:scale-105"
                        style={{
                            borderColor: lightTheme.color.secondary,
                            backgroundColor: "transparent",
                            border: "2px solid " + lightTheme.color.primary,
                            color: lightTheme.color.primary // Or use lightTheme.color.secondary
                        }}
                    >
                        lorem ipsum
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero