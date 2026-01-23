// main landing page

import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import OpenPLCSandbox from "@/components/OpenPLCSandbox";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import CustomProducts from "../components/CustomProducts";

export default function Home() {
  return (
    <div className="flex flex-col justify-center font-sans dark:bg-black">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="openplc-sandbox">
        <OpenPLCSandbox />
      </section>
      <section id="custom-products">
        <CustomProducts />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
