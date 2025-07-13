import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

const ServicesSection = () => {
  return (
    <>
      <div className="container mx-auto lg:h-[100vh] flex flex-col justify-center py-10" id="services-section">
        
        <h2 className="text-center text-5xl mb-5 text-slate-800 font-bold">Sacred <span className="text-yellow-500">Services</span></h2>

        <div className="flex flex-col items-center mb-5">
          <p className="text-center text-[18px] text-zinc-700">Discover the ancient wisdom that can illuminate your path forward</p>
          <div className="bg-purple-500/70 h-1 rounded-full my-4 w-30"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-green-100/70 hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl border border-gray-300 p-8 flex flex-col justify-center items-center text-center">
            <div className="rounded-full bg-purple-200/50 w-[fit-content] p-4 mb-4">
              <FaRegStar className="text-3xl text-purple-500" />
            </div>
            <p className="text-[20px] font-bold mb-5 text-zinc-700">Horoscope Reading</p>
            <p className="text-[14px] mb-5 text-zinc-700">Comprehensive birth chart analysis revealing your personality, strengths, and life path guided by planetary positions.</p>
            <p className="text-[20px] font-medium mb-5 text-yellow-400">Starting at $75</p>
            <button className="text-white hover:scale-104 hover:brightness-110 cursor-pointer transition duration-300 py-4 rounded-full w-[100%] bg-b288ea">Book Now</button>
          </div>
          
          <div className="bg-green-100/70 hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl border border-gray-300 p-8 flex flex-col justify-center items-center text-center">
            <div className="rounded-full bg-purple-200/50 w-[fit-content] p-4 mb-4">
              <IoMdSunny className="text-3xl text-purple-500" />
            </div>
            <p className="text-[20px] font-bold mb-5 text-zinc-700">Vastu Consultation</p>
            <p className="text-[14px] mb-5 text-zinc-700">Ancient science of architecture and space arrangement to harmonize your living and working environments.</p>
            <p className="text-[20px] font-medium mb-5 text-yellow-400">Starting at $120</p>
            <button className="text-white hover:scale-104 hover:brightness-110 cursor-pointer transition duration-300 py-4 rounded-full w-[100%] bg-b288ea">Book Now</button>
          </div>
          
          <div className="bg-green-100/70 hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl border border-gray-300 p-8 flex flex-col justify-center items-center text-center">
            <div className="rounded-full bg-purple-200/50 w-[fit-content] p-4 mb-4">
              <FiMoon className="text-3xl text-purple-500" />
            </div>
            <p className="text-[20px] font-bold mb-5 text-zinc-700">Palmistry</p>
            <p className="text-[14px] mb-5 text-zinc-700">Reading the lines, mounts, and shapes of your hands to uncover insights about your character and future.</p>
            <p className="text-[20px] font-medium mb-5 text-yellow-400">Starting at $75</p>
            <button className="text-white hover:scale-104 hover:brightness-110 cursor-pointer transition duration-300 py-4 rounded-full w-[100%] bg-b288ea">Book Now</button>
          </div>

        </div>
      
      </div>
    </>
  )
};

export default ServicesSection;