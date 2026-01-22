"use client"
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import data from "@/utils/vanjuiceData.json"

// The 'colors' prop comes from Home page via {...themeData}
function Hero({ colors, id }: any) {
    const [currentImage, setCurrentImage] = useState(0);

    // Auto-scroll images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % data.images.latest.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () =>
        setCurrentImage((prev) => (prev + 1) % data.images.latest.length);
    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + data.images.latest.length) % data.images.latest.length);

    // Determine if we are in dark mode for specific conditional styling
    const isDark = colors.primary === "#101828";

    return (
        <div
            id={id}
            className="relative min-h-screen transition-colors duration-500 overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Background Decorative Element - Adjusted opacity for dark mode */}
            <div
                className={`absolute top-0 right-0 w-1/3 h-full ${data.images.latest[currentImage].badgeColor} skew-x-12 transform translate-x-20 z-0 opacity-20 md:opacity-100`}
            ></div>

            <section className="container mx-auto px-6 pt-32 pb-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 h-full min-h-screen">

                {/* Text Content */}
                <div className="hero-text md:w-1/2 flex flex-col gap-6 text-center md:text-left mt-12 md:mt-0">
                    <div style={{ color: colors.orange, backgroundColor: `${colors.orange}20` }}
                        className="inline-block px-4 py-1 rounded-full font-semibold text-sm w-max mx-auto md:mx-0">
                        {data.heroContent.content.mainTitle}
                    </div>
                    
                    <h1 style={{ color: isDark ? "#ffffff" : colors.footer }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight">
                        {data.heroContent.content.title}
                        <br />
                        <span
                            style={{
                                backgroundImage: `linear-gradient(to right, ${colors.gradientText.from}, ${colors.gradientText.to})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                            className="bg-clip-text text-transparent"
                        >
                            {data.heroContent.content.subTitle}
                        </span>
                    </h1>

                    <p
                        style={{ color: isDark ? "#94a3b8" : colors.gray }}
                        className="text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        {data.heroContent.content.description}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                        <NextLink
                            href="/vanjuice/view-menu"
                            style={{ backgroundColor: colors.orange }}
                            className="text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            View Menu
                        </NextLink>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-70}
                            style={{
                                backgroundColor: colors.primary,
                                color: isDark ? "#ffffff" : colors.footer,
                                border: `1px solid ${isDark ? "#334155" : colors.footer}`
                            }}
                            className="px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div
                        style={{ color: isDark ? "#ffffff" : colors.footer }}
                        className="flex items-center justify-center md:justify-start gap-8 mt-8">
                        <div>
                            <p className="text-3xl font-bold">5k+</p>
                            <p style={{ color: isDark ? "#94a3b8" : colors.gray }}>Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">20+</p>
                            <p style={{ color: isDark ? "#94a3b8" : colors.gray }}>Fruit Flavors</p>
                        </div>
                    </div>
                </div>

                {/* Image Slider */}
                <div className="hero-img md:w-1/2 flex items-center justify-center relative">
                    <div className="relative w-full max-w-sm">
                        {/* Navigation Arrows */}
                        <div style={{ backgroundColor: colors.primary, color: isDark ? "#ffffff" : colors.footer }}
                            className="absolute top-1/2 -left-6 z-20 p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
                            onClick={prevImage}
                        >
                            <HiArrowLeft className="text-xl" />
                        </div>

                        {/* Image Card */}
                        <div className={`${isDark ? "bg-gray-800/40 border-gray-700" : "bg-white/30 border-white/50"} backdrop-blur-xl border p-6 rounded-3xl shadow-2xl relative overflow-hidden group`}>
                            <div style={{ color: "#ffffff", backgroundColor: colors.accent }}
                                className={`absolute top-0 right-0 font-bold px-4 py-2 rounded-bl-2xl z-20`}
                            >
                                Best Seller
                            </div>
                            <div className="h-80 w-full overflow-hidden rounded-2xl relative">
                                <img
                                    src={data.images.latest[currentImage].image}
                                    alt={data.images.latest[currentImage].name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="mt-6 flex justify-between items-end">
                                <div>
                                    <h3 style={{ color: isDark ? "#ffffff" : colors.footer }} className="text-2xl font-bold">
                                        {data.images.latest[currentImage].name}
                                    </h3>
                                    <p style={{ color: colors.accent }} className="font-bold text-xl mt-1">
                                        {data.images.latest[currentImage].price} XAF
                                    </p>
                                </div>
                                <button
                                    style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                                    className="p-3 rounded-xl shadow-lg transition-transform hover:scale-110">
                                    <NextLink href="/vanjuice-blog"><HiArrowRight className="text-xl" /></NextLink>
                                </button>
                            </div>
                        </div>

                        <div style={{ backgroundColor: colors.primary, color: isDark ? "#ffffff" : colors.footer }}
                            className="absolute top-1/2 -right-6 z-20 p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
                            onClick={nextImage}
                        >
                            <HiArrowRight className="text-xl" />
                        </div>

                        {/* Slider Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {data.images.latest.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentImage
                                        ? "w-8"
                                        : "w-2 bg-gray-300"
                                    }`}
                                    style={{ backgroundColor: index === currentImage ? colors.orange : undefined }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;