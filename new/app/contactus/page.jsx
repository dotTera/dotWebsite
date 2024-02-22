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
            <div className="flex flex-col md:flex-row items-center justify-center">
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
            <div className="flex items-centern justify-center">
                <form className="flex flex-col bg-green-100">
                    <div className="flex flex-col">
                        <label className="">Full Name</label>
                        <input type="text" className="p-2 border border-gray-400"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="">Email</label>
                        <input type="text" className=""/>
                    </div>

                    <div className="flex flex-col">
                        <label className="">Message</label>
                        <input type="text" className=""/>
                    </div>

                    <div className="flex items-center justify-center">
                        <button type="button" className="">Send Message</button>
                    </div>

                </form>
            </div>
        </div>
    )
}