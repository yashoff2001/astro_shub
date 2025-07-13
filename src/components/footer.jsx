import { FaRegStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return(
    <>
      <div className="container mx-auto px-5 md:px-20 pt-15">

        <footer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

          <section>
            <p className="flex gap-3 items-center text-3xl font-bold mb-6"><FaRegStar className="text-yellow-300 animate-pulse transition duration-700" /> Shub Astro</p>
            <p className="text-gray-300 mb-6">Illuminating paths through ancient wisdom and cosmic insight. Your journey to self-discovery and spiritual growth begins here.</p>
            <div className="flex gap-5 mb-5">
              <div className="text-yellow-500 bg-yellow-100/30 cursor-pointer p-3 rounded-full text-2xl hover:scale-125 duration-300">
                <FaFacebookF />
              </div>
              <div className="text-yellow-500 bg-yellow-100/30 cursor-pointer p-3 rounded-full text-2xl hover:scale-125 duration-300">
                <FaInstagram />
              </div>
              <div className="text-yellow-500 bg-yellow-100/30 cursor-pointer p-3 rounded-full text-2xl hover:scale-125 duration-300">
                <FaTwitter />
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-6">

            <div className="mb-6">

              <h5 className="text-[20px] font-medium text-yellow-500 mb-6">Quick Links</h5>

              <ul className="leading-8 w-[fit-content]">
                <li className="cursor-pointer hover:text-yellow-400">Home</li>
                <li className="cursor-pointer hover:text-yellow-400">About</li>
                <li className="cursor-pointer hover:text-yellow-400">Services</li>
                <li className="cursor-pointer hover:text-yellow-400">Contact</li>
              </ul>

            </div>

            <div className="">

              <h5 className="text-[20px] font-medium text-yellow-500 mb-6">Contact</h5>

              <ul className="leading-8 w-[fit-content]">
                <li className="flex gap-3 items-center cursor-pointer">
                  <IoCallOutline className="text-2xl text-purple-400" />
                  <p className="text-gray-300 hover:text-yellow-300">+1 (555) 123-4567</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <IoMailOutline className="text-2xl text-purple-400" />
                  <p className="text-gray-300 hover:text-yellow-300">guide@celestial.com</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <IoLocationOutline className="text-2xl text-purple-400" />
                  <p className="text-gray-300 hover:text-yellow-300">Los Angeles, CA</p>
                </li>
              </ul>

            </div>

          </div>
          
        </div>
          
        </footer>

        <hr className="text-slate-600" />
        
        <p className="text-center text-slate-600 py-5"> 2024 Celestial Guide. All rights reserved. I Crafted with cosmic energy and modern design.</p>

      </div>
    </>
  );
};

export default Footer;