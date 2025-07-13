import Stars from "../assets/stars";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto lg:h-[100vh] flex flex-col justify-center py-10">
        
        <h2 className="text-center text-5xl mb-5 text-slate-800 font-bold">Client  <span className="text-yellow-500">Testimonials</span></h2>

        <div className="flex flex-col items-center mb-5">
          <p className="text-center text-[18px] text-zinc-700">Hear from those whose lives have been touched by celestial wisdom</p>
          <div className="bg-purple-500/70 h-1 rounded-full my-4 w-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="bg-white hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl p-6">
            <div className="mb-6"><Stars /></div>
            <p className="text-[17px] text-zinc-700">"The horoscope reading was incredibly accurate and insightful. It helped me understand myself better and make important life decisions with confidence."</p>
            <hr className="text-zinc-300 my-5" />
            <div>
              <p className="text-slate-800 font-medium">Michael Chen</p>
              <p className="text-slate-700">San Francisco, CA</p>
            </div>
          </div>

          <div className="bg-white hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl p-6">
            <div className="mb-6"><Stars /></div>
            <p className="text-[17px] text-zinc-700">"The horoscope reading was incredibly accurate and insightful. It helped me understand myself better and make important life decisions with confidence."</p>
            <hr className="text-zinc-300 my-5" />
            <div>
              <p className="text-slate-800 font-medium">Michael Chen</p>
              <p className="text-slate-700">San Francisco, CA</p>
            </div>
          </div>

          <div className="bg-white hover:scale-104 hover:drop-shadow-2xl transition duration-300 rounded-2xl p-6">
            <div className="mb-6"><Stars /></div>
            <p className="text-[17px] text-zinc-700">"The horoscope reading was incredibly accurate and insightful. It helped me understand myself better and make important life decisions with confidence."</p>
            <hr className="text-zinc-300 my-5" />
            <div>
              <p className="text-slate-800 font-medium">Michael Chen</p>
              <p className="text-slate-700">San Francisco, CA</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
};

export default Testimonials;