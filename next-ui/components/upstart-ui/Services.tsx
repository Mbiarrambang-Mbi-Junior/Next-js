"use client"

import upstartData from "@/utils/upstartData.json"
import { BsPlayCircleFill, BsFillPlayCircleFill } from "react-icons/bs"

function Services() {
    const { themes } = upstartData;
    const { lightTheme } = themes;

    const serviceList = [
        {
            title: "lorem ipsum",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <BsPlayCircleFill size={25} />
        },
        {
            title: "lorem ipsum",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <BsFillPlayCircleFill size={25} />
        }
    ];

    return (
        <section id="services" className="px-6 flex flex-col items-center justify-center md:px-20 py-24">
            {/* Header Text */}
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: lightTheme.color.primary }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-lg opacity-70 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* Service Content Container */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Video/Media Side */}
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
                        {/* Replace src with your actual video link */}
                        <video 
                            src="/path-to-your-video.mp4" 
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                        {/* Overlay to match theme */}
                        <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                    </div>
                </div>

                {/* Cards Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    {serviceList.map((service, index) => (
                        <div 
                            key={index} 
                            className="card flex gap-6 items-start p-6 rounded-2xl transition-all hover:bg-gray-50 group"
                        >
                            {/* Icon Container */}
                            <div 
                                style={{
                                    border: `2px solid ${lightTheme.color.primary}`,
                                    color: lightTheme.color.primary
                                }}
                                className="shrink-0 p-4 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                            >
                                {service.icon}
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl font-bold" style={{ color: lightTheme.color.primary }}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services