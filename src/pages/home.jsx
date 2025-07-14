import React from 'react'
import MainSection from '../components/main-section'
import AboutSection from '../components/about-section'
import Services from '../components/services-section'
import Testimonials from '../components/testimonials'
// import Destiny from '../components/destiny'
// import Footer from '../components/footer'
// import Stars from './assets/stars'

function HomePage() {
  return (
    <>
      <div className='linear-bg px-5 sm:px-20'>
        <MainSection />
      </div>
      <div className="px-5 md:px-20 bg-gray-200">
        <AboutSection />
        <Services />
        <Testimonials />
      </div>
      {/* <div className="destiny-linear-bg px-5 md:px-20">
        <Destiny />
      </div> */}
    </>
  )
}

export default HomePage