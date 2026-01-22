"use client"

import coffeeData from "@/utils/coffeeData.json"
import Image from "next/image"

function TopCategory() {
    const { images } = coffeeData;

    // Mapping specific coffee names to our image array
    const categories = [
        { name: 'Coffee Mocha', img: images[0] },
        { name: 'Espresso Americano', img: images[1] },
        { name: 'Cappuccino Latte', img: images[2] }
    ];

    return (
        <section className="py-20 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-2 tracking-tight">TOP CATEGORIES</h2>
            <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest">
                Explore The Recent Most Bought Drinks This Week
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className="relative group h-[450px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer"
                    >
                        {/* Overlay: Darker by default, lightens on hover */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
                        
                        {/* Background Image */}
                        <img 
                            src={cat.img.url} 
                            alt={cat.img.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                            <h3 className="text-3xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {cat.name}
                            </h3>
                            <div className="overflow-hidden">
                                <span className="block border-b-2 border-amber-400 py-1 text-sm font-bold tracking-tighter opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                    VIEW MORE
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopCategory