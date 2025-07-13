import { CiStar } from "react-icons/ci";
import { AiFillMoon } from "react-icons/ai";

const MainSection = () => {
  return (
    <>
      <div className="container mx-auto py-10 sm:h-[100dvh] flex flex-col justify-center">

        <div className="text-neutral-300 text-center my-6">

          <CiStar className="animate-bounce text-gray-300 text-4xl" />

          <CiStar className="animate-ping text-yellow-200 absolute bottom-18 right-[50%]" />

          <AiFillMoon className="animate-bounce  text-yellow-300 text-4xl absolute right-32 top-17 sm:top-30" />
          
          <h1 className="text-7xl mb-5 font-bold"><span className="text-yellow-500">Shub</span> Astro</h1>

          <p className="text-2xl mb-8">Guiding Lives Through the Stars</p>

          <p className="text-2xl">Discover your destiny with ancient wisdom and modern insight. Let the cosmos reveal your path to happiness, success, and spiritual growth.</p>

          <div className="flex flex-col md:flex-row gap-8 my-8 items-center justify-center">

            <button className="hover:scale-102 text-white rounded-full py-3 px-7 bg-b288ea cursor-pointer border border-slate-500 w-[100%] md:w-auto transition duration-300">Book Consultation</button>
            
            <button className="hover:scale-102 bg-white border border-yellow-400 text-yellow-400 py-3 px-7 w-50 md:w-auto  rounded-full cursor-pointer transition duration-300">Explore Services</button>

          </div>

        </div>

      </div>

    </>
  )
}

export default MainSection