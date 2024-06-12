import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="max-w-full bg-[#F8F8F8]">

            <div className="w-10/12 mx-auto py-10 flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="w-3/5">

                    <Link to="/">
                        <img className="w-40" src="https://i.ibb.co/NNtc9Gk/logo.png" alt="Footer Logo" />
                    </Link>

                    <Link to="/">
                        <button className="text-[#331A15] text-3xl font-semibold my-3">Espresso Emporium</button>
                    </Link>

                    <p className="text-[#1B1A1A]">
                        Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.
                    </p>

                    <div className="flex items-center gap-4 my-6 ">
                        <span className="text-[#331A15]">
                            <a href=""><FaFacebook /></a>
                        </span>

                        <span className="text-[#331A15]">
                            <a href=""><FaTwitter /> </a>
                        </span>

                        <span className="text-[#331A15]">
                            <a href=""><FaInstagram /></a>
                        </span>

                        <span className="text-[#331A15]">
                            <a href=""><FaLinkedin /></a>
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[#331A15] text-3xl font-semibold">Get in Touch</h3>

                        <div className="flex items-center gap-3">
                            <span className="text-[#331A15]"><FaPhoneAlt /></span>
                            <span className="text-[#1B1A1A]">+88 01533 333 333</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[#331A15]"><MdEmail /></span>
                            <span className="text-[#1B1A1A]">info@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[#331A15]"><FaMapMarkerAlt /></span>
                            <span className="text-[#1B1A1A]">72, Wall street, King Road, Dhaka</span>
                        </div>

                    </div>

                </div>

                <div className="w-2/5 space-y-4">

                    <h3 className="text-[#331A15] text-3xl font-semibold">Connect With Us</h3>

                    <label className="input flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className="input flex items-center gap-2">
                        <input type="email" className="grow" placeholder="Email" />
                    </label>

                    <textarea placeholder="Message" className="textarea  textarea-md w-full" ></textarea>

                    <button className="text-[#331A15] font-medium text-lg border-2 border-[#331A15] rounded-full px-4 py-2 hover:bg-[#E3B577]">Send Message</button>

                </div>
            </div>

            <div className="bg-[#eae5d1] text-center py-2">
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;