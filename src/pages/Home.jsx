import React from 'react'
import Hero from '../section/HomePage/Hero/Hero'
import AboutSection from '../section/HomePage/AboutSection/AboutSection';
import Services from '../section/HomePage/ServicesSection/Services';
import ContactSection from '../section/HomePage/ContactSection/ContactSection';
import TestimonialSection from '../components/testimonial/TestimonialSection';
import { testimonialsData } from "../components/testimonial/testimonial";


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Services />
      <ContactSection />
      <TestimonialSection
        title="What Our Clients Say"
        subtitle="Trusted by businesses who value creativity and performance."
        data={testimonialsData}
      />
    </div>
  )
}

export default Home
