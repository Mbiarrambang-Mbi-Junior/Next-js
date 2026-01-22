// layout for coffee app
import coffeeData from "@/utils/coffeeData.json";
import type { Metadata } from "next";
import Navbar from "@/components/coffee-ui/Navbar";
import Footer from "@/components/coffee-ui/Footer";

export const metadata: Metadata = {
    title: "Coffee",
    icons: { icon: coffeeData.Metadata.logo }
};


// layoute.tsx
export default function FoodLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen">
            {/* Background Layers */}
            {/* Ensure these are truly at the back */}
            <div className="fixed inset-0 -z-50 bg-white" /> 
            
            {/* items-stretch ensures Navbar takes full width */}
            <main className="relative z-10 w-full flex flex-col items-stretch">
                <Navbar />
                <div className="w-full">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}