// layout for 1food app
import foodData from "@/utils/1foodData.json";
import Navbar from "@/components/1food-ui/Navbar";
import type { Metadata } from "next";

// This replaces the manual <link> tag and <title>
export const metadata: Metadata = {
  title: "1Food",
  icons: { icon: foodData.Metadata.logo }
};

export default function FoodLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Layers */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${foodData.images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
          transform: "scale(1.1)" 
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/20" />

      <main className="flex flex-col items-center relative z-10 w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
}