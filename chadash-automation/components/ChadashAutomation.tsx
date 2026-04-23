"use client"

import Image from "next/image"
import image from "@/public/CHADASH-AUTOMATION.jpeg"

export default function ChadashAutomation() {
  return (
    /* FIX: 
       1. Added 'overflow-hidden' to clip the scaled image.
       2. Set the div to the same width/height as the image (w-[50px] h-[50px]).
       3. Added 'rounded-full' here as well to ensure the container is a circle.
    */
    <div className=" w-12.5 h-12.5 overflow-hidden rounded-full">
      <Image 
        src={image} 
        alt="Chadash Automation Logo" 
        width={50}          
        height={50}          
        className="rounded-full transition-transform duration-300 scale-200 object-cover"
      />
    </div>
  )
}
