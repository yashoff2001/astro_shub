import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const GetInTouch = () => {
    return(
        <div className="p-8 rounded-2xl border border-zinc-600 bg-gray-500/50 backdrop-blur-md">
            <p className="text-yellow-500 text-2xl font-semibold mb-5">Get in Touch</p>

            <div className="flex flex-col gap-5 pb-5">
                <a href="" className="flex gap-8 text-white hover:scale-102 duration-300">
                    <div className="text-purple-800 bg-purple-100/30 cursor-pointer p-3 rounded-full gap-8 flex w-[fit-content] items-center">
                        <IoCallOutline className="text-2xl" />
                    </div>
                    <p className="text-sm">
                        <span className="font-semibold">Phone</span> <br />{" "}
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                    </p>
                </a>

                <a href="" className="flex gap-8 text-white hover:scale-102 duration-300">
                    <div className="text-purple-800 bg-purple-100/30 cursor-pointer p-3 rounded-full gap-8 flex w-[fit-content] items-center">
                        <IoMailOutline className="text-2xl" />
                    </div>
                    <p className="text-sm">
                        <span className="font-semibold">Mail</span> <br />{" "}
                        <span className="text-gray-300">username@plateform.domain</span>
                    </p>
                </a>

                <a href="" className="flex gap-8 text-white hover:scale-102 duration-300">
                    <div className="text-purple-800 bg-purple-100/30 cursor-pointer p-3 rounded-full gap-8 flex w-[fit-content] items-center">
                        <IoLocationOutline className="text-2xl" />
                    </div>
                    <p className="text-sm">
                        <span className="font-semibold">Location</span> <br />{" "}
                        <span className="text-gray-300">Kamla Nehru Nagar, Ajmer Road, Jaipur - 303030</span>
                    </p>
                </a>
            </div>

            <hr className="text-zinc-600 my-5" />

            <div className="text-gray-300">
                <p className="font-semibold mb-3">Office Hours</p>
                <p className="text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="text-sm">Saturday - 10:00 AM - 5:00 PM</p>
                <p className="text-sm">Sunday - By appointment only</p>
            </div>
        </div>
    )
};

export default GetInTouch;