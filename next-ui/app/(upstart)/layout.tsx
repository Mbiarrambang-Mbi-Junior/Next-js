// layout for upstart app
import Navbar from "@/components/upstart-ui/Navbar";
import Footer from "@/components/upstart-ui/Footer";
import upstartData from "@/utils/upstartData.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Upstart",
    icons: { icon: upstartData.Metadata.logo }
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