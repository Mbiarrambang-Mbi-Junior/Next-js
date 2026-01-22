"use client"

import upstartData from "@/utils/upstartData.json"
import { updateTag } from "next/cache";
import { FaQuoteLeft } from "react-icons/fa"

function Testimonials() {
    const { themes } = upstartData;
    const { lightTheme } = themes;

    const reviews = upstartData.reviews;

    return (
        <section id="testimonials" className="px-6 md:px-20 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                        style={{ color: lightTheme.color.primary }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <div 
                        className="h-1.5 w-24 mx-auto rounded-full"
                        style={{ backgroundColor: lightTheme.color.primary }}
                    ></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-[2rem] border border-gray-100 flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl"
                            style={{ backgroundColor: lightTheme.color.secondary + '20' }} // Adding slight transparency
                        >
                            <FaQuoteLeft 
                                className="text-3xl opacity-20" 
                                style={{ color: lightTheme.color.primary }}
                            />
                            
                            <p className="text-lg italic opacity-80 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img 
                                    src={review.image} 
                                    alt={review.name} 
                                    className="w-14 h-14 rounded-full object-cover border-2"
                                    style={{ borderColor: lightTheme.color.primary }}
                                />
                                <div>
                                    <h4 className="font-bold text-lg" style={{ color: lightTheme.color.primary }}>
                                        {review.name}
                                    </h4>
                                    <p className="text-sm opacity-60">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials