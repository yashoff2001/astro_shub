import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar';
import './styles.css'
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PageNoteFound from './pages/pageNotFound';


function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/*" element={ <PageNoteFound /> } /> {/* Keep It in Last */}
      </Routes>
    </>
  )
};

export default App;