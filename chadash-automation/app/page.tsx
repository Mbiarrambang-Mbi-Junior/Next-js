// main landing page

import AboutUs from "@/components/About";
import Hero from "@/components/Hero";
import Contact from "@/components/Contanct";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col justify-center font-sans dark:bg-black">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
