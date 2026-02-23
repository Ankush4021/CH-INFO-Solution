import React from 'react'
import ContactHero from '../section/ContactPage/ContactHero/ContactHero'
import ContactMainSection from '../section/ContactPage/ContactMainSection/ContactWrapper'
import ContactTrust from '../section/ContactPage/ContactTrust/ContactTrust'
import ContactCTA from '../section/ContactPage/ContactCTA/ContactCTA'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactMainSection />
      <ContactTrust />
      <ContactCTA />
    </div>
  )
}

export default Contact
