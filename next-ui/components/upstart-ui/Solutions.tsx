"use client"

import { FaLightbulb, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa"
import upstartData from "@/utils/upstartData.json"

function Solutions() {
    const { themes } = upstartData;
    const { lightTheme } = themes;

    const solutions = [
        {
            title: "lorem ipsum",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <FaLightbulb />
        },
        {
            title: "lorem ipsum",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <FaChartLine />
        },
        {
            title: "lorem ipsum",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <FaShieldAlt />
        },
        {
            title: "lorem ipsum",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <FaRocket />
        }
    ];

    return (
        <section 
            className="px-6 md:px-20 py-24"
            style={{ 
                backgroundColor: "#ffffff", 
                color: lightTheme.color.primary 
            }}
        >
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                    Lorem ipsum
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((item, index) => (
                    <div 
                        key={index}
                        className="p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group flex flex-col items-center text-center"
                        style={{ 
                            backgroundColor: lightTheme.color.secondary,
                            borderColor: `${lightTheme.color.primary}15` // 15% opacity primary color for border
                        }}
                    >
                        {/* Icon Container */}
                        <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform duration-500 group-hover:rotate-[10deg]"
                            style={{ 
                                backgroundColor: lightTheme.color.primary,
                                color: "#ffffff"
                            }}
                        >
                            {item.icon}
                        </div>

                        {/* Text Content */}
                        <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                        <p className="leading-relaxed opacity-80">
                            {item.description}
                        </p>

                        {/* Bottom Accent - optional visual flair */}
                        <div 
                            className="mt-8 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24"
                            style={{ backgroundColor: lightTheme.color.primary }}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Solutions