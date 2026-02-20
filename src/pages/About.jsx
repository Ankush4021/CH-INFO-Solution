import React from 'react'
import Hero from '../section/AboutPage/Hero/Hero'
import Overview from '../section/AboutPage/Overview/Overview'
import WhyChoose from '../section/AboutPage/WhyChoose/WhyChoose'
import MissionVision from '../section/AboutPage/MissionVission/MissionVision'
import FinalCTA from '../section/AboutPage/FinalCTA/FinalCTA'

const About = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <WhyChoose />
      <MissionVision />
      <FinalCTA />
    </div>
  )
}

export default About
