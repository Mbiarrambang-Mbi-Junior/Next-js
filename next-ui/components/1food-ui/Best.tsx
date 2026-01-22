"use client"
import Image from "next/image"
import foodData from "@/utils/1foodData.json"

function Best() {
  return (
    // Changed: flex-col for mobile, flex-row for desktop
    <section id="best" className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-20">
      <div className="image-best w-full md:w-1/2 flex justify-center">
        <Image 
          src={foodData.images[1].url} 
          alt={foodData.images[1].alt} 
          width={500} 
          height={500} 
          className="w-3/4 md:w-full h-auto drop-shadow-2xl"
        />
      </div>
      <div className="best-text w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">{foodData.bestContent.title}</h2>
        <p className="text-lg md:text-xl mt-4 text-gray-700">{foodData.bestContent.description}</p>
      </div>
    </section>
  )
}

export default Best