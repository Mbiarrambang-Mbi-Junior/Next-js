"use client"
import coffeeData from "@/utils/coffeeData.json"
import Image from "next/image"

function MilkShakes() {
  const { milkshakeContent, themes } = coffeeData;
  const { lightTheme } = themes;

  return (
    <section className="py-20 bg-white/30 backdrop-blur-md rounded-[60px] mx-4 md:mx-10 mb-20 border border-white/20 shadow-xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-2 text-[#1e1e1e] tracking-tight">
            {milkshakeContent.title}
          </h2>
          <p className="text-sm text-gray-500 mb-16 uppercase tracking-[0.2em]">
            {milkshakeContent.subTitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {milkshakeContent.items.map((shake) => (
              <div 
                key={shake.id} 
                className="bg-white/60 p-8 rounded-[50px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center group"
              >
                 {/* Top Badge */}
                 <div className="self-start text-[10px] font-bold bg-white px-4 py-1.5 rounded-full text-gray-400 shadow-sm mb-6 flex items-center gap-1 group-hover:text-pink-500 transition-colors">
                    <span>👍</span> {shake.likes} LIKES
                 </div>

                 {/* Product Image Container */}
                 <div 
                    className="w-full h-64 mb-8 rounded-[40px] overflow-hidden relative shadow-inner"
                    style={{ backgroundColor: shake.bgColor }}
                 >
                    <img 
                      src={shake.image} 
                      alt={shake.name} 
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700"
                    />
                 </div>

                 {/* Details */}
                 <h3 className="text-2xl font-black text-[#1e1e1e] mb-6">{shake.name}</h3>
                 
                 <div className="flex justify-between items-center w-full mt-auto">
                    <span className="font-black text-2xl text-[#1e1e1e]">${shake.price}</span>
                    <button 
                      style={{ backgroundColor: lightTheme.color.primary }}
                      className="text-white px-6 py-3 rounded-2xl text-xs font-black tracking-widest hover:brightness-125 transition-all active:scale-95 shadow-lg"
                    >
                      BUY NOW
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default MilkShakes