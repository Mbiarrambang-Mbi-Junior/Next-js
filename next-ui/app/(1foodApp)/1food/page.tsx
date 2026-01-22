import Hero from "@/components/1food-ui/Hero";
import Toplist from "@/components/1food-ui/Toplist";
import Best from "@/components/1food-ui/Best";
import Services from "@/components/1food-ui/Services";
import Footer from "@/components/1food-ui/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex w-full flex-col items-center">
        {/* IDs must match the 'path' in Navbar.tsx */}
        <section id="home" className="w-full">
          <Hero />
        </section>

        <section id="toplist" className="w-full">
          <Toplist />
        </section>

        <section id="best" className="w-full">
          <Best />
        </section>

        <section id="services" className="w-full">
          <Services />
        </section>

        <Footer />
      </main>
    </div>
  );
}