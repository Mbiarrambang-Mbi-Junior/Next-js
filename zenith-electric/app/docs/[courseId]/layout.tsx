// app/docs/layout.tsx
import { Layout } from "nextra-theme-docs";
import NavBar from "@/components/NavBar";
import "@/app/globals.css";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      {/* Keep your custom NavBar here if you want it in docs too */}
      <NavBar /> 
        <main className="pt-20 bg-[#0b0e14]">
          {children}
        </main>
    </div>
  );
}