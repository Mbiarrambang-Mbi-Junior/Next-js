"use client"

import Image from "next/image"
import image from "@/app/favicon.ico"

function ZenithElectric() {
  return (
    /* FIX: 
       1. Added 'overflow-hidden' to clip the scaled image.
       2. Set the div to the same width/height as the image (w-[50px] h-[50px]).
       3. Added 'rounded-full' here as well to ensure the container is a circle.
    */
    <div className="zenith-electric w-[50px] h-[50px] overflow-hidden rounded-full">
      <Image 
        src={image} 
        alt="Zenith Electric Logo" 
        width={50}          
        height={50}          
        className="rounded-full transition-transform duration-300 scale-200 object-cover"
      />
    </div>
  )
}

export default ZenithElectric