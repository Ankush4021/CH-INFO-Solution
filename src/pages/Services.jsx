import React from 'react'
import ServicesHero from '../section/ServicesPage/ServicesHero/ServicesHero'
import ServicesShowcase from '../section/ServicesPage/ServicesShowcase/ServicesShowcase'
import WhyChooseUs from '../section/ServicesPage/WhyChooseUs/WhyChooseUs'
import ServicesCTA from '../section/ServicesPage/ServicesCTA/ServicesCTA'

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesShowcase />
      <WhyChooseUs />
      <ServicesCTA />
    </div>
  )
}

export default Services
