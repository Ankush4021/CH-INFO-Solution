import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo/logoCHinfo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-1 
                  py-12 sm:py-16 lg:py-20
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                  gap-10 lg:gap-20
                  text-center lg:text-left">

        {/* Company Info */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={logo}
            alt="CH Info Solution Logo"
            className="w-36 mb-5 brightness-110"
          />
          <p className="text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-sm">
            We provide complete IT Solutions delivering innovative
            technology services ensuring reliability and growth.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-base lg:text-lg font-semibold text-white mb-4 lg:mb-6">
            Useful Links
          </h3>

          <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-500 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-base lg:text-lg font-semibold text-white mb-4 lg:mb-6">
            Contact
          </h3>
          <div className="space-y-2 lg:space-y-3 text-sm lg:text-base flex flex-col">
            <a href="tel:+918377996001" className="hover:text-blue-600 transition">
              +91 8377996001
            </a>
            <a href="tel:+918377996001" className="hover:text-blue-600 transition">
              +91 7053926977
            </a>
            <a href="mailto:mohitbeniwal94636@gmail.com" className="hover:text-blue-600 transition mt-4">
              mohitbeniwal94636@gmail.com
            </a>
            <a href="mailto:dhruvbeniwal2314@gmail.com" className="hover:text-blue-600 transition mt-4">
              dhruvbeniwal2314@gmail.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-base lg:text-lg font-semibold text-white mb-4 lg:mb-6">
            Address
          </h3>
          <p className="text-sm lg:text-base leading-relaxed mb-2">
            1. Sector 18, Noida,<br />
            Uttar Pradesh - 201301
          </p>
          <p className="text-sm lg:text-base leading-relaxed mb-2">
            2. Nehru Place<br />
            New Delhi - 110019
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 lg:mt-6 justify-center lg:justify-start">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 lg:w-11 lg:h-11
                       flex items-center justify-center 
                       border border-gray-700 rounded-full 
                       hover:bg-blue-600 hover:border-blue-600 
                       transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 py-4 lg:py-6 text-center text-xs lg:text-sm text-gray-500">
        <p>© 2026 CH Info Solution.</p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <span className="text-blue-500 font-semibold hover:underline cursor-pointer">
            Sira Digital
          </span>
        </p>
      </div>

    </footer>

  );
};

export default Footer;
