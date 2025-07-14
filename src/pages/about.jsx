import React from 'react'
import AboutSection from '../components/about-section'
import Services from '../components/services-section'
import Testimonials from '../components/testimonials'
// import Stars from './assets/stars'

function AboutPage() {
  return (
    <>
      <div className="px-5 py-10 md:px-20 bg-gray-200">
        <AboutSection />
        <Services />
        <Testimonials />
      </div>
    </>
  )
}

export default AboutPage;