// layout for vanjuice app
import { ThemeProvider } from "@/components/vanjuice-ui/ThemeContext";
import Navbar from "@/components/vanjuice-ui/Navbar";
import vanjuiceData from "@/utils/vanjuiceData.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VanJuice",
  icons: { icon: vanjuiceData.Metadata.logo }
};

export default function JuiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        {children}
      </main>
    </ThemeProvider>
  );
}