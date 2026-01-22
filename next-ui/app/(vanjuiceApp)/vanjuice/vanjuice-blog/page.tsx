"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import data from "@/utils/vanjuiceData.json";
import { useTheme } from "@/components/vanjuice-ui/ThemeContext";
import { HiOutlineArrowRight, HiOutlineCalendar, HiOutlineClock, HiArrowLeft } from "react-icons/hi";

// Define the interface for Type Safety
interface ThemeColors {
  primary: string;
  orange: string;
  footer: string;
  gray: string;
  accent: string;
  gradientText: { from: string; to: string };
}

export default function Blog() {
  const { theme } = useTheme();
  const themeKey = theme as keyof typeof data.themes;
  const colors = data.themes[themeKey].colors as ThemeColors;
  const isDark = theme === "darkTheme";

  // Mock blog data (You can eventually move this to data.json)
  const posts = [
    {
      id: 1,
      title: "The Benefits of Cold-Pressed Juice",
      excerpt: "Discover why cold-pressing preserves more nutrients than traditional juicing methods...",
      date: "Oct 12, 2025",
      readTime: "5 min",
      image: data.images.all[0].image,
      category: "Health"
    },
    {
      id: 2,
      title: "Top 5 Detox Recipes for Winter",
      excerpt: "Stay vibrant and healthy this winter with our favorite immune-boosting juice blends...",
      date: "Nov 05, 2025",
      readTime: "4 min",
      image: data.images.all[1].image,
      category: "Recipes"
    },
    {
      id: 3,
      title: "Sourcing Local: Our Farmers",
      excerpt: "Meet the people behind the fruits. How we ensure every bottle is 100% organic...",
      date: "Dec 01, 2025",
      readTime: "6 min",
      image: data.images.all[2].image,
      category: "Sustainability"
    }
  ];

  return (
    <div 
      className="min-h-screen pt-32 pb-20 transition-colors duration-500"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto px-6">
        <NextLink href="/" 
        style={{ color: colors.orange }}
        className="flex items-center gap-2"><HiArrowLeft />Back to Home</NextLink>
        {/* Blog Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 
            style={{ color: isDark ? "#ffffff" : colors.footer }}
            className="text-5xl font-extrabold mb-4"
          >
            Fresh <span style={{ color: colors.orange }}>Stories</span>
          </h1>
          <p 
            style={{ color: isDark ? "#94a3b8" : colors.gray }}
            className="text-lg max-w-2xl"
          >
            Explore our latest tips on nutrition, wellness, and the journey behind our organic juices.
          </p>
        </div>

        {/* Featured Post */}
        <div 
          className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl group cursor-pointer"
          style={{ height: '500px' }}
        >
          <img 
            src={posts[0].image} 
            alt="Featured" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span 
              style={{ backgroundColor: colors.orange }}
              className="px-4 py-1 rounded-full text-white text-sm font-bold mb-4 inline-block"
            >
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
              {posts[0].title}
            </h2>
            <div className="flex items-center gap-6 text-gray-300">
              <span className="flex items-center gap-2"><HiOutlineCalendar /> {posts[0].date}</span>
              <span className="flex items-center gap-2"><HiOutlineClock /> {posts[0].readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  style={{ backgroundColor: colors.accent, color: colors.primary }}
                  className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold"
                >
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: colors.orange }}>
                <span className="flex items-center gap-1"><HiOutlineCalendar /> {post.date}</span>
                <span className="flex items-center gap-1"><HiOutlineClock /> {post.readTime}</span>
              </div>

              <h3 
                style={{ color: isDark ? "#ffffff" : colors.footer }}
                className="text-2xl font-bold mb-3 group-hover:underline transition-all"
              >
                {post.title}
              </h3>

              <p 
                style={{ color: isDark ? "#94a3b8" : colors.gray }}
                className="text-base mb-6 line-clamp-3"
              >
                {post.excerpt}
              </p>

              <button 
                style={{ color: colors.orange }}
                className="mt-auto flex items-center gap-2 font-bold uppercase text-sm tracking-wider group-hover:gap-4 transition-all"
              >
                Read More <HiOutlineArrowRight />
              </button>
            </article>
          ))}
        </div>

        {/* Newsletter Signup (Dynamic Themed) */}
        <div 
          style={{ backgroundColor: isDark ? "#1f2937" : "#fff7ed" }}
          className="mt-24 p-12 rounded-3xl text-center border"
        >
          <h2 
            style={{ color: isDark ? "#ffffff" : colors.footer }}
            className="text-3xl font-bold mb-4"
          >
            Never Miss a Fresh Update
          </h2>
          <p style={{ color: isDark ? "#94a3b8" : colors.gray }} className="mb-8">
            Get healthy tips and exclusive discounts delivered to your inbox.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className={`px-6 py-3 rounded-full outline-none border w-full ${
                isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-orange-200"
              }`}
            />
            <button 
              style={{ backgroundColor: colors.orange }}
              className="text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}