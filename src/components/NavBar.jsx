import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"

const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition bg-slate-900/90">
      <ul className="text-center text-xl py-10 px-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">Services</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer hover:bg-slate-800 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  </>

  return(
    
    <nav className="bg-slate-900/70 backdrop-blur-md z-10 fixed top-0 px-10 md:px-20 border-b border-slate-500 w-[100%]">

      <div className="container mx-auto">
        
        <div className="h-10vh flex justify-between text-white py-3 flex-1">
          
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Logo</span>
          </div>

          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden lg-block">

            <div className="flex-10">

              <ul className="flex gap-8 text-[18px] justify-end">
                <Link spy={true} smooth={true} to="Home">
                  <li className="text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                  <li className="text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Services">
                  <li className="text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer">Services</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                  <li className="text-white transition border-b-2 border-slate-500 hover:border-yellow-300 hover:text-yellow-200 cursor-pointer">Contact</li>
                </Link>
              </ul>

            </div>

          </div>

          <div className="">
            {click && content}
          </div>

          <button className="block md:hidden transition" onClick={handleClick}>
            { click ? <FaTimes /> : <CiMenuFries />}
          </button>

        </div>

      </div>

    </nav>

  )

};

export default NavBar