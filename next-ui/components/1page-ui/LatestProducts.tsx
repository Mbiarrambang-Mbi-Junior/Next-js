"use client"
import Image from "next/image"
import pageData from "@/utils/1pageData.json"
import Link from "next/link"

function LatestProducts() {
  const products = pageData.images.slice(0, 4);

  return (
    <section id="latest-products" className="w-full py-20 px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Products</h2>
          <div className="h-1 w-20 bg-blue-600 mt-4"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={product.url} 
                  alt={product.alt || "Product Image"} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {product.alt || "Product Name"}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  High-performance automation component designed for seamless system integration.
                </p>
                <Link 
                  href={`/products/${index}`} 
                  className="inline-block text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="w-full">
           <div className="relative w-full aspect-video rounded-[30px] overflow-hidden shadow-2xl border-8 border-white">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg" // Fallback image while loading
              >
                <source 
                  src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Supercomputers_08_preview.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
           </div>
        </div>

      </div>
    </section>
  )
}

export default LatestProducts