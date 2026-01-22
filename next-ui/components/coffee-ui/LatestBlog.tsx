"use client"
import React from 'react'
import coffeeData from "@/utils/coffeeData.json"

function LatestBlog() {
    const { blogContent, themes } = coffeeData;
    const { lightTheme } = themes;

    return (
        <section id="blog" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e1e1e] tracking-tighter mb-4">
                            {blogContent.title}
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-sm">
                            {blogContent.subTitle}
                        </p>
                    </div>
                    <button 
                        style={{ borderColor: lightTheme.color.primary, color: lightTheme.color.primary }}
                        className="border-2 px-8 py-3 rounded-full font-bold text-xs hover:bg-[#1e1e1e] hover:text-white transition-all duration-300"
                    >
                        VIEW ALL POSTS
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogContent.posts.map((post) => (
                        <article key={post.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-64 w-full rounded-[30px] overflow-hidden mb-6 shadow-lg">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold px-4 py-2 rounded-full shadow-sm">
                                        {post.date}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-2">
                                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-3 group-hover:text-amber-700 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold tracking-tighter group-hover:gap-4 transition-all">
                                    <span>READ ARTICLE</span>
                                    <span className="text-xl">→</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestBlog