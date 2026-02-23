import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo/logoCHinfo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between relative">

        {/* Logo + Brand */}
        <div className="flex items-center gap-1 z-50">
          <img src={logo} alt="CH Info Solutions Logo" className="h-9 w-auto" />
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-blue-600">CH</span>{" "}
            <span className="text-gray-800">Info Solutions</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-semibold transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-blue-600 after:transition-all after:duration-300
                ${isActive
                  ? "text-blue-600 after:w-full"
                  : "text-gray-800 after:w-0 hover:after:w-full hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/918377996001"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition"
        >
          WhatsApp Us
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 text-gray-900">
          {isOpen ? (
            <HiX
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] py-8" : "max-h-0"
          }`}
      >
        <div className="bg-gray-900 text-white flex flex-col items-center gap-8 py-6 rounded-b-2xl shadow-2xl">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold transition ${isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile WhatsApp Button */}
          <a
            href="https://wa.me/918377996001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;