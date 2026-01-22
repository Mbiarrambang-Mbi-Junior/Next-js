import { Search, ShoppingBag, Instagram, Facebook, Youtube } from 'lucide-react';
import Hero from '@/components/coffee-ui/Hero';
import TopCategory from '@/components/coffee-ui/TopCategory';
import MilkShakes from '@/components/coffee-ui/MilkShakes';
import LatestBlog from '@/components/coffee-ui/LatestBlog';

export default function CoffeeLanding() {
  return (
    <div className="bg-[#f5e6d3] min-h-screen font-sans text-[#3d2b1f]">
      {/* --- HERO SECTION --- */}
      <section id="hero">
        <Hero />
      </section>

      {/* --- TOP CATEGORIES --- */}
      <section id="top-categories">
        <TopCategory />
      </section>

      {/* --- MILK SHAKES SECTION --- */}
      <section id="milk-shakes">
        <MilkShakes />
      </section>

      {/* --- LATESTBLOG SECTION --- */}
      <section id="latest-blog">
        <LatestBlog />
      </section>
      
    </div>
  );
}