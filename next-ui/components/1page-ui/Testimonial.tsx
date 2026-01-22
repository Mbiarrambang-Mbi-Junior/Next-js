"use client"
import { BsHeart, BsCheck, BsStarFill, BsStarHalf } from "react-icons/bs"

function Testimonial() {
  const reviews = [
    { id: 1, name: "John Doe", role: "Product Manager", text: "The automation tools provided have completely transformed our workflow. Highly recommended!" },
    { id: 2, name: "Sarah Smith", role: "Data Analyst", text: "Seamless integration and top-notch security. The best hardware solutions we've used so far." },
    { id: 3, name: "Mike Johnson", role: "CTO", text: "Responsive support and powerful processing capabilities. A game changer for our infrastructure." },
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials</h2>
            <p className="text-gray-500 text-lg">What our customers say about us</p>
          </div>
          
          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <BsHeart className="text-red-500" />
              <span className="text-sm font-medium text-gray-700">Top Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <BsCheck className="text-green-500 text-xl" />
              <span className="text-sm font-medium text-gray-700">Verified Users</span>
            </div>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-[30px] shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                </div>
                
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-none mb-1">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  )
}

export default Testimonial