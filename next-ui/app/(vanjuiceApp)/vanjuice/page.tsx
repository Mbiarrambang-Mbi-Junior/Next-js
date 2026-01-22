"use client"; // Required to use the useTheme hook
import Hero from "@/components/vanjuice-ui/Hero"
import About from "@/components/vanjuice-ui/About"
import Services from "@/components/vanjuice-ui/Services"
import Contact from "@/components/vanjuice-ui/Contact"
import Footer from "@/components/vanjuice-ui/Footer"
import data from "@/utils/vanjuiceData.json"
import { useTheme } from "@/components/vanjuice-ui/ThemeContext"; // Import your hook

function Home() {
  // 1. Access the current theme string ("lightTheme" or "darkTheme")
  const { theme } = useTheme();

  // 2. Dynamically select the correct colors from your JSON
  const themeData = data.themes[theme as keyof typeof data.themes];

  return (
    // 3. Apply the primary background color to the main container
    <div 
      className='flex flex-col transition-colors duration-300 min-h-screen'
      style={{ backgroundColor: themeData.colors.primary }}
    >
      {/* 4. Pass the specific theme object to each section */}
      <Hero id="hero" {...themeData} />
      <About id="about" {...themeData} />
      <Services id="services" {...themeData} />
      <Contact id="contact" {...themeData} />
      <Footer />
    </div>
  )
}

export default Home;