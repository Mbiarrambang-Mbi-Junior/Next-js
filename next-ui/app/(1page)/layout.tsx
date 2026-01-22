// layout for 1food app
import foodData from "@/utils/1foodData.json";
import Navbar from "@/components/1page-ui/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "1Food",
    icons: { icon: foodData.Metadata.logo }
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
            </main>
        </div>
    );
}