import Image from "next/image"
import image from "@/public/Zenith Electric.jpeg"

function ZenithElectric() {
  return (
        <div className="zenith-electric">
            <Image 
                src={image} // Path to your image in the 'public' folder
                alt="Description of the food" 
                width={50}          
                height={50}          
                className="rounded-full"
            />
        </div>
  )
}

export default ZenithElectric