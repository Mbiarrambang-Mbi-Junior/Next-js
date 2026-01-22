"use client"

import Image from "next/image"

function Food() {
    return (
        <div className="flex justify-center items-center">
            <Image 
                src="/1Food.png" // Path to your image in the 'public' folder
                alt="Description of the food" 
                width={50}          
                height={50}          
                className="rounded-lg"
            />
        </div>
    )
}

export default Food