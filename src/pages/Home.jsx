import React from 'react'
import Hero from '../section/HomePage/Hero/Hero'
import AboutSection from '../section/HomePage/AboutSection/AboutSection';
import Services from '../section/HomePage/ServicesSection/Services';
import ContactSection from '../section/HomePage/ContactSection/ContactSection';


const Home = () => {
  return (
    <div>
    <Hero />
     <AboutSection />
     <Services />
     <ContactSection />
    </div>
  )
}

export default Home
