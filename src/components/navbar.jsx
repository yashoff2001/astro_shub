import React, { useState } from "react";
// import { Link as NavLink } from 'react-scroll';
import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () =>  setClick(!click);
  const closeMenu = () => setClick(false);

  // Mobile View

  const mobileNav = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition bg-slate-900/90">
      <ul className="text-center text-xl py-10 px-10 sm:px-20">

        <NavLink to="/home" spy={true} smooth="true" duration={500}>
          <li onClick={closeMenu} className="mb-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
          Home</li>
          </NavLink>

        <NavLink to="/about" spy={true} smooth="true" duration={500}>
        <li onClick={closeMenu} className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
          About</li>
        </NavLink>
        
        <NavLink to="/services" spy={true} smooth="true" duration={500}>
          <li onClick={closeMenu} className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
          Services</li>
        </NavLink>

        <NavLink to="/contact" spy={true} smooth="true" duration={500}>
          <li onClick={closeMenu} className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
          Contact</li>
        </NavLink>

      </ul>
    </div>
  </>

  return(
    
    <nav className="fixed top-0 bg-slate-900/70 backdrop-blur-md z-10 px-5 md:px-20 border-b border-slate-500 w-[100%]">

      <div className="container mx-auto">
        
        <div className="h-10vh flex justify-between text-white py-3 flex-1">
          
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Logo</span>
          </div>

          {/* Desktop View */}

          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden lg-block">

            <div className="flex-10">

              <ul className="flex gap-8 text-[18px] justify-end">
                
                <li onClick={closeMenu} className="p-3 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
                  <NavLink to="/home" spy={true} smooth="true" duration={500}>Home</NavLink>
                </li>

                <li onClick={closeMenu} className="p-3 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
                  <NavLink to="/about" spy={true} smooth="true" duration={500}>About</NavLink>
                </li>

                <li onClick={closeMenu} className="p-3 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
                  <NavLink to="/services" spy={true} smooth="true" duration={500}>Services</NavLink>
                </li>

                <li onClick={closeMenu} className="p-3 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">
                  <NavLink to="/contact" spy={true} smooth="true" duration={500}>Contact</NavLink>
                </li>
              </ul>

            </div>

          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button onClick={handleClick}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
        </div>

        {click && mobileNav}

      </div>

    </nav>

  )

};

export default NavBar