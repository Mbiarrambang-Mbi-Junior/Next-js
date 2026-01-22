"use client"
import Hero from "@/components/1page-ui/Hero";
import Product from "@/components/1page-ui/Product";
import Testimonial from "@/components/1page-ui/Testimonial";
import LatestProducts from "@/components/1page-ui/LatestProducts";
import Services from "@/components/1page-ui/Services";
import Footer from "@/components/1page-ui/Footer"

export default function Home() {
    return (
        <div className="w-full">
            <main className="flex w-full flex-col items-center justify-center">
                {/* Navbar REMOVED from here because it's now in layoute.tsx */}
                
                <section id="home" className="w-full ">
                    <Hero />
                </section>

                <section id="services" className="w-full">
                    <Services />
                </section>

                <section id="products" className="w-full">
                    <Product />
                </section>

                <section id="latest-products" className="w-full">
                    <LatestProducts />
                </section>

                <section id="testimonials" className="w-full">
                    <Testimonial />
                </section>

                <Footer />
            </main>
        </div>
    );
}