"use client"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import upstartData from "@/utils/upstartData.json"

function About() {
    const { themes, images, aboutContent } = upstartData;
    const { lightTheme } = themes;

    return (
        <section 
            style={{
                backgroundColor: lightTheme.color.primary,
                color: lightTheme.color.secondary
            }}
            /* Added 'relative' so the image can overflow safely */
            className="relative px-6 md:px-20 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12"
        >
            {/* Left Side: Content */}
            <div className="flex flex-col gap-6 max-w-2xl z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {aboutContent?.title || "Lorem ipsum dolor sit amet, consectetur"}
                </h1>
                
                <p className="text-lg opacity-80 leading-relaxed">
                    {aboutContent?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas dolores, harum reprehenderit incidunt veritatis placeat..."}
                </p>

                <div className="icons flex gap-6 mt-2">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <FaLinkedin className="text-3xl" />
                    </a>
                </div>
            </div>

            {/* Right Side: Image with Responsive Pop Out */}
            <div className="relative shrink-0 z-20 mt-16 md:mt-0">
                <div className="overflow-hidden rounded-2xl shadow-2xl 
                                /* Removed negative margin on mobile, kept on desktop */
                                md:-my-20 
                                /* Explicit sizes to maintain portrait ratio */
                                w-[280px] h-[400px] md:w-[350px] md:h-[500px]">
                    <Image 
                        className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                        src={images[0].url} 
                        alt={images[0].alt} 
                        width={350} 
                        height={500}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default About