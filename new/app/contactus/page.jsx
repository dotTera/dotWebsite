import Navbar from "@/app/components/Navbar";
import {ContactButton} from "@/app/components/ContactButton";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default  function ContactUs(){
    return(
        <div className="">
            <Navbar/>
            <div className="text-main font-bold text-center text-2xl">
                Contact Us
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center mx-4">
                <ContactButton
                    icon={ <BsWhatsapp/>  }
                    name="WhatsApp"
                    message="Our Chat Inbox"
                    link="https://api.whatsapp.com/send?phone=23058417209"
                />

                <ContactButton
                    icon={ <FaLinkedin/>  }
                    name="LinkedIn"
                    message="Our LinkedIn Profile"
                    link="https://www.linkedin.com/in/david-gondo/"
                />

                <ContactButton
                    icon={  <MdOutlineEmail/> }
                    name="Email"
                    message="Our Mail"
                    link=""
                />

            </div>
            <div className="flex md:items-center  md:justify-center my-4 flex-col">
                <div className="font-bold text-main text-xl text-center">Send Us A Message</div>
                <form className="flex flex-col bg-green-100 gap-2 p-3 md:w-1/2 w-full rounded-md">
                    <div className="flex flex-col">
                        <label className="">Full Name</label>
                        <input type="text" className="input-field"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="">Email</label>
                        <input type="text" className="input-field"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="">Message</label>
                        <textarea className="input-field"/>
                    </div>

                    <div className="flex items-center justify-center my-2">
                        <button type="button" className="p-3 text-center bg-main text-white">Send Message</button>
                    </div>

                </form>
            </div>
        </div>
    )
}