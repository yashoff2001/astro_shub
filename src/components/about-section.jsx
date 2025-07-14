import ProfilePic from '../assets/photo.jpeg'

const AboutSection = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center py-20" id="about-section">

        <div className="flex flex-col items-center mb-5">
          <h2 className="text-center text-5xl mb-5 text-slate-800 font-bold">About <span className="text-yellow-500">Your Guide</span></h2>
          <div className="bg-purple-500/70 h-1 rounded-full my-4 w-30"></div>
        </div>
        

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">

          <div className="flex my-7 justify-center items-center">
            <img src={ProfilePic} className="rounded-full h-90 border-2 border-yellow-300" alt="" />
          </div>

          <div className="text-sm leading-7 place-content-center">

            <h4 className="text-slate-800 text-3xl font-medium my-5">Master Celestial Guide</h4>

            <p className="text-[18px] text-justify mb-5 text-zinc-700">With over 15 years of experience in Vedic astrology, I have dedicated my life to understanding the cosmic influences that shape our destinies. My journey began with ancient Sanskrit texts and has evolved through years of practice and thousands of successful consultations.</p>

            <p className="text-[18px] text-justify m-0 text-zinc-700">I specialize in combining traditional astrological wisdom with modern psychological insights to provide guidance that is both profound and practical. Whether you seek clarity about relationships, career, or spiritual growth, the stars hold answers waiting to be discovered.</p>

          </div>

        </div>

      </div>
    </>
  )
}

export default AboutSection;