import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar';
import './styles.css'
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PageNoteFound from './pages/pageNotFound';
import Footer from './components/footer';
import Services from './pages/services';


function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/*" element={ <PageNoteFound /> } /> {/* Keep It in Last */}
      </Routes>
      <div className="bg-2d3e50">
        <Footer />
      </div>
    </>
  )
};

export default App;