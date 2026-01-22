"use client"

import upstartData from "@/utils/upstartData.json"
import Image from "next/image"

function Upstart() {
    return (
        <section id="upstart" className="">
            <Image 
            src={upstartData.Metadata.logo} 
            alt={upstartData.Metadata.alt} 
            width={80}
            height={80}
            />
        </section>
    )
}

export default Upstart