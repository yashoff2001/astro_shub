import ContactForm from "../components/contact-form";
import GetInTouch from "../components/get-in-touch";


const Contact = () => {
  return (
    <div className="px-5 md:px-20 py-10 contact-form-gradient-bg place-content-center">
      <div className="container mx-auto py-20">
        <div className="place-content-center flex flex-col items-center text-center mb-8">
          <h2 className="text-5xl mb-6 text-white font-bold">Connect with <span className="text-yellow-500">Your Guide</span></h2>

          <p className="text-gray-300 text-[18px] mb-8">Ready to explore your cosmic destiny? Reach out to begin your journey of self-discovery.</p>

          <button className="text-white hover:scale-102 hover:brightness-110 cursor-pointer transition duration-300 py-4 rounded-full w-[250px] bg-b288ea mb-5 font-bold">
            Book Appointment Now
          </button>
        </div>

        {/* Contact */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Get In Touch */}
          <GetInTouch />

          {/* Contact Form */}
          <ContactForm />

        </div>
      </div>
    </div>
  );
};
export default Contact;
