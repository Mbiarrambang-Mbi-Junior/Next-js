"use client"

import Hero from '@/components/upstart-ui/Hero'
import About from '@/components/upstart-ui/About'
import Solutions from '@/components/upstart-ui/Solutions'
import Services from '@/components/upstart-ui/Services'
import Contact from '@/components/upstart-ui/Contact'
import Testimonials from '@/components/upstart-ui/Testimonials'

function Home() {
  return (
    <div>
        <section id="hero">
            <Hero />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="solutions">
            <Solutions />
        </section>
        <section id="services">
            <Services />
        </section>
        <section id="contact">
            <Contact />
        </section>
        <section id="testimonials">
            <Testimonials />
        </section>
    </div>
  )
}

export default Home