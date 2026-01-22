"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import data from '@/utils/vanjuiceData.json';
import { HiOutlineChevronLeft, HiOutlineShoppingBag } from 'react-icons/hi';
import NextLink from 'next/link';
import { useTheme } from '@/components/vanjuice-ui/ThemeContext';

// 1. Define the shape of your colors to stop the "does not exist" error
interface ThemeColors {
  primary: string;
  orange: string;
  footer: string;
  gray: string;
  accent: string;
  about: string;
  service: string;
  contact: string;
  gradientText: { from: string; to: string };
}

export default function ViewMenu() {
  const { theme } = useTheme();
  
  // 2. Safely access the theme data
  const themeKey = theme as keyof typeof data.themes;
  const themeData = data.themes[themeKey];
  
  // 3. Cast colors to the ThemeColors interface defined above
  const colors = themeData.colors as ThemeColors;
  const isDark = theme === "darkTheme";

  const categories = ["All", "Citrus", "Berry", "Tropical", "Detox"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div 
      className="min-h-screen pt-28 pb-20 transition-colors duration-500"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <NextLink 
              href="/" 
              style={{ color: colors.orange }}
              className="flex items-center font-semibold mb-2 hover:gap-2 transition-all"
            >
              <HiOutlineChevronLeft className="text-xl" /> Back to Home
            </NextLink>
            <h1 
              style={{ color: isDark ? "#ffffff" : colors.footer }}
              className="text-4xl font-extrabold"
            >
              Our <span style={{ color: colors.orange }}>Fresh Menu</span>
            </h1>
            <p style={{ color: isDark ? "#94a3b8" : colors.gray }} className="mt-2">
              100% Organic, freshly pressed juices delivered to you.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? colors.orange : (isDark ? "#1f2937" : "#ffffff"),
                  color: activeCategory === cat ? "#ffffff" : (isDark ? "#94a3b8" : colors.gray),
                  boxShadow: activeCategory === cat ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none"
                }}
                className="px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.images.all.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                borderColor: isDark ? "#374151" : "#f3f4f6"
              }}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  style={{ backgroundColor: colors.accent, color: colors.primary }}
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-md"
                >
                  Freshly Pressed
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 style={{ color: isDark ? "#ffffff" : colors.footer }} className="text-xl font-bold">
                    {item.name}
                  </h3>
                  <span style={{ color: colors.orange }} className="font-bold">
                    {item.price} XAF
                  </span>
                </div>
                <p 
                  style={{ color: isDark ? "#94a3b8" : colors.gray }} 
                  className="text-sm mb-6 line-clamp-2"
                >
                  A perfect blend of locally sourced fruits, prepared with no added sugar or preservatives.
                </p>
                
                <button 
                  style={{ backgroundColor: isDark ? colors.orange : colors.footer }}
                  className="w-full text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-95"
                >
                  <HiOutlineShoppingBag className="text-xl" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}