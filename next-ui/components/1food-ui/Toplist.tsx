"use client"
import data from "@/utils/1foodData.json"
import Image from "next/image"
import { HiStar, HiPlus } from "react-icons/hi"

function Toplist() {
  return (
    // Changed px-20 to px-6 md:px-20 for mobile spacing
    <section id="toplist" className="px-6 md:px-20 py-5">
      <div className="toplist-text flex flex-col items-center justify-center text-center">
        {/* Responsive text sizes */}
        <h2 className="p-0 text-4xl md:text-6xl font-bold">{data.toplistContent.title}</h2>
        <p className="p-0 text-xl md:text-2xl mt-2">{data.toplistContent.subTitle}</p>
      </div>

      {/* Changed: flex-col for mobile, flex-row for desktop */}
      {/* Increased gap-24 for mobile to accommodate pop-out images */}
      <div className="cards gap-24 md:gap-10 flex flex-col md:flex-row items-center justify-center px-0 md:px-10 mt-20">

        {/* CARD 1 (1/3 proportional width) */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
          className="card relative w-full md:flex-1 p-6 rounded-2xl shadow-xl transition-all hover:scale-105"
        >
          <div className="image flex justify-center -mt-20 mb-4">
            <Image src={data.images[0].url} alt={data.images[0].alt} width={160} height={160} className="rounded-full object-cover border-4 border-white/50 drop-shadow-2xl" />
          </div>
          <div className="img-text space-y-2 pt-2">
            <p style={{ color: data.themes.lightTheme.color.yellow }} className="flex items-center gap-1 text-sm">
              <HiStar size={20} /> <span>{data.toplistContent.cards[0].ratings}</span>
            </p>
            <p className="font-bold text-lg">{data.toplistContent.cards[0].name}</p>
            <p className="text-sm line-clamp-2">{data.toplistContent.cards[0].description}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="font-bold text-xl">{data.toplistContent.cards[0].price}</span>
            <button style={{ color: data.themes.lightTheme.color.buttonText }} className="p-2 rounded-full shadow-md"><HiPlus /></button>
          </div>
        </div>

        {/* CARD 2 (The LARGER middle card) */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.4)"
        }}
          className="card relative w-full md:flex-[1.5] p-8 rounded-3xl shadow-2xl transition-all border-2 border-white/50"
        >
          <div className="image flex justify-center -mt-24 mb-6">
            <Image src={data.images[2].url} alt={data.images[2].alt} width={220} height={220} className="rounded-full object-cover border-4 border-white/70 drop-shadow-2xl" />
          </div>
          <div className="img-text space-y-3 pt-2 text-center">
            <p style={{ color: data.themes.lightTheme.color.yellow }} className="flex items-center justify-center gap-1 text-base">
              <HiStar size={24} /> <span>{data.toplistContent.cards[2].ratings}</span>
            </p>
            <p className="font-extrabold text-2xl">{data.toplistContent.cards[2].name}</p>
            <p className="text-base">{data.toplistContent.cards[2].description}</p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <span className="font-extrabold text-3xl">{data.toplistContent.cards[2].price}</span>
            <button style={{ color: data.themes.lightTheme.color.buttonText }} className="p-3 rounded-full shadow-lg scale-110"><HiPlus /></button>
          </div>
        </div>

        {/* CARD 3 (1/3 proportional width) */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
          className="card relative w-full md:flex-1 p-6 rounded-2xl shadow-xl transition-all hover:scale-105"
        >
          <div className="image flex justify-center -mt-20 mb-4">
            <Image src={data.images[2].url} alt={data.images[2].alt} width={160} height={160} className="rounded-full object-cover border-4 border-white/50 drop-shadow-2xl" />
          </div>
          <div className="img-text space-y-2 pt-2">
            <p style={{ color: data.themes.lightTheme.color.yellow }} className="flex items-center gap-1 text-sm">
              <HiStar size={20} /> <span>{data.toplistContent.cards[2].ratings}</span>
            </p>
            <p className="font-bold text-lg">{data.toplistContent.cards[2].name}</p>
            <p className="text-sm line-clamp-2">{data.toplistContent.cards[2].description}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="font-bold text-xl">{data.toplistContent.cards[2].price}</span>
            <button style={{ color: data.themes.lightTheme.color.buttonText }} className="p-2 rounded-full shadow-md"><HiPlus /></button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Toplist