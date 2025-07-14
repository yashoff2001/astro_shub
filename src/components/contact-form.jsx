import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.status === 200) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", service: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
        console.error(error);
        alert("Failed to send message. Please try again.");
        }
    };
    
    return(
    <>
        {/* Contact Form */}
        <div className="p-8 rounded-2xl border border-zinc-600 bg-gray-500/50 backdrop-blur-md">
            
            <p className="text-yellow-500 text-2xl font-semibold mb-5">Send a Message</p>
            <form className="text-white flex flex-col gap-5" onSubmit={handleSubmit}>
                
                {/* Name */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="name">Full Name</label>
                    <input  type="text" name="name" placeholder="Your full Name" value={formData.name} onChange={handleChange} className="border border-zinc-600 p-2 rounded-xl outline-0" required />
                </div>
                
                {/* Email */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">Email</label>
                    <input  type="text" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} className="border border-zinc-600 p-2 rounded-xl outline-0" required />
                </div>
                
                {/* Services */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="service">Service of Intrest</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="border border-zinc-600 p-2 rounded-xl outline-0 bg-gray-500/50 backdrop-blur-md" required>
                        <option value="">Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="service">Service of Intrest</label>
                    <textarea name="message" placeholder="Describe your problem..." value={formData.message} onChange={handleChange} rows="4" className="border border-zinc-600 p-2 rounded-xl outline-0" required ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="text-white hover:brightness-110 cursor-pointer transition duration-300 py-4 px-8 rounded-full  bg-b288ea w-[fit-content] mb-5 font-bold place-self-center">Submit</button>

            </form>

        </div>
    </>
    )
}

export default ContactForm;