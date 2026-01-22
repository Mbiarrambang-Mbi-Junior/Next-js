"use client"
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import data from "@/utils/vanjuiceData.json";

function About({ id, colors }: { id: string, colors: any }) {
  const isDark = colors.primary === "#101828";

  return (
    <section
      id={id}
      style={{ backgroundColor: colors.about }}
      className="min-h-screen flex flex-col items-center justify-center text-white py-24 px-7 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="about-text flex flex-col gap-8 order-2 lg:order-1">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
              {data.aboutContent.title}
            </h2>
            <div className="h-2 w-32 bg-white rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-orange-50 font-medium">
            <p>
              <span className="text-2xl font-bold text-white block mb-2">
                {data.aboutContent.title}
              </span>
              {data.aboutContent.description}
            </p>
            <p>{data.aboutContent.description2}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {data.aboutContent.checkBox.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <BsCheckCircleFill className="text-white text-xl flex-shrink-0" />
                <span className="font-bold">{item.label}</span>
              </div>
            ))}
          </div>

          <button
            style={{ color: colors.about }}
            className="self-start mt-6 bg-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Read Our Story
          </button>
        </div>

        <div className="about-img order-1 lg:order-2 relative">
          <div className="absolute top-10 right-10 w-full h-full bg-white/20 rounded-[3rem] -z-10 transform rotate-6 border-4 border-white/20"></div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-[3rem] p-6 shadow-2xl transform hover:-rotate-2 transition-transform duration-500`}>
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="col-span-2 h-full bg-orange-100 rounded-2xl overflow-hidden relative group">
                <img src={data.images.latest[0].image} alt="Natural" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest z-10">
                    Natural
                  </div></div>
              </div>
              <div className="h-full bg-orange-50 rounded-2xl overflow-hidden relative group">
                <img
                  src={data.images.latest[1].image}
                  alt="Tasty"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest z-10">
                  Fresh
                </div>
              </div>
              <div className="h-full bg-orange-50 rounded-2xl overflow-hidden relative group">
                <img
                  src={data.images.latest[2].image}
                  alt="Tasty"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest z-10">
                  Tasty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;