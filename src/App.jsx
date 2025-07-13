import React from 'react'
import NavBar from './components/navbar'
import './styles.css'
import AboutSection from './components/about-section'
import Services from './components/services'
import Testimonials from './components/testimonials'
import Stars from './assets/stars'
import Destiny from './components/destiny'
import Footer from './components/footer'
import Main from './components/main'

function App() {
  return (
    <>
      <NavBar />
      <div className='linear-bg px-10 sm:px-20'>
        <Main />
      </div>
      <div className="px-10 md:px-20 bg-gray-200">
        <AboutSection />
        <Services />
        <Testimonials />
      </div>
      <div className="destiny-linear-bg px-10 md:px-20">
        <Destiny />
      </div>
      <div className="bg-2d3e50">
        <Footer />
      </div>
    </>
  )
}

export default App
