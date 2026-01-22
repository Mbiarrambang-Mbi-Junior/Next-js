"use client"
import { BsPhone, BsPeopleFill, BsCarFront, BsBellFill } from "react-icons/bs"

function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-center py-20 px-6">
        <div className="flex justify-center text-4xl pb-10">
           <h2 className="font-bold">Our services</h2> 
        </div>
        {/* Changed: flex-wrap to allow cards to stack on small screens */}
        <div className="flex flex-wrap justify-center gap-6">
            <span className="s-card flex justify-center items-center gap-2 p-4 bg-white/30 backdrop-blur-md rounded-xl min-w-[180px] shadow-sm">
              <BsPhone size={20} /><p className="font-medium">Online booking</p>
            </span>
            <span className="s-card flex justify-center items-center gap-2 p-4 bg-white/30 backdrop-blur-md rounded-xl min-w-[180px] shadow-sm">
              <BsBellFill size={20} /><p className="font-medium">Catering service</p>
            </span>
            <span className="s-card flex justify-center items-center gap-2 p-4 bg-white/30 backdrop-blur-md rounded-xl min-w-[180px] shadow-sm">
              <BsPeopleFill size={20} /><p className="font-medium">Membership</p>
            </span>
            <span className="s-card flex justify-center items-center gap-2 p-4 bg-white/30 backdrop-blur-md rounded-xl min-w-[180px] shadow-sm">
              <BsCarFront size={20} /><p className="font-medium">Delivery service</p>
            </span>
        </div>
    </section>
  )
}

export default Services