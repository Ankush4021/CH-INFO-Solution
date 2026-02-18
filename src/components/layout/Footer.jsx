import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-2 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            CH INFO SOLUTION
          </h2>
          <p className="leading-relaxed text-sm">
            We provide complete IT Solutions and deliver innovative
            technology services ensuring reliability, security and
            business growth.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 ">
            Useful Links
          </h3>
          <ul className="space-y-3 w-fit text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-500 transition cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Services</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm">
            <p>+91 8377996001</p>
            <p>mohitbeniwal94636@gmail.com</p>
          </div>
        </div>

        {/* Address + Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Address
          </h3>
          <p className="text-sm leading-relaxed">
            Ansal Fortune Arcade,<br />
            Sector 18, Noida,<br />
            Uttar Pradesh - 201301
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 space-y-2">
        <p>
          © 2026 CH Info Solution. All Rights Reserved.
        </p>

        <p className="text-gray-600 text-xs tracking-wide">
          Designed & Developed by
          <span className="ml-1 text-blue-500 font-semibold hover:underline cursor-pointer">
            Sira Digital
          </span>
        </p>
      </div>


    </footer>
  );
};

export default Footer;
