import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo/ch-info-solution-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center z-50">
          <img
            src={logo}
            alt="CH Info Solutions Logo"
            className="h-12 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium tracking-wide transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-blue-600 after:transition-all after:duration-300
                ${isActive
                  ? "text-blue-600 after:w-full"
                  : "text-gray-700 after:w-0 hover:after:w-full hover:text-blue-600"
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
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Let’s Talk
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 text-gray-800">
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
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] py-6" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-6">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition ${isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="https://wa.me/918377996001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;