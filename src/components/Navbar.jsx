import { useState, useEffect } from "react";
import assets from '../assets/assests'
import { Link, Links } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when ESC key is pressed
  useEffect(() => {
    // const handleEscKey = (event: KeyboardEvent) => {
    //   if (event.key === "Escape" && isMenuOpen) {
    //     setIsMenuOpen(false);
    //   }
    // };

    // window.addEventListener("keydown", handleEscKey);

    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      //window.removeEventListener("keydown", handleEscKey);    
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`container mx-auto w-full p-2 px-10 sticky top-0 z-50 transition-all duration-300 overflow-x-hidden ${
        hasScrolled ? "bg-[#1E305E] backdrop-blur-md text-white" : "bg-[#1E305E] text-white"
      }`}
    >
      <div className="flex items-center justify-between ">
        <Link to={'/'}>
          <img src={assets.logo} alt="logo" className="w-42" />
        </Link>
 
        {/* Desktop Navigation Links */}
        <div className="hidden md:hidden lg:flex items-center gap-8 text-lg font-medium">
          <Link to="/">Build A Home</Link>
          <Link to="/community">Communities</Link>
          <Link to="/plan">Plan & Design</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Desktop Button
        <div className="hidden md:block">
          <button>contact</button>
        </div> */}

        {/* Mobile Hamburger Icon */}
        <button
          className="lg:hidden p-2 text-blue-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <div className="flex gap-2">Menu <FiMenu size={24} /> </div>}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#1e305e] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-x-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6 mt-4 text-lg font-semibold">
            <Link
              to="/"
              className="p-2 hover:bg-blue-200 hover:text-black rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Build A Home
            </Link>
            <Link
              to="/services"
              className="p-2 hover:bg-blue-200 hover:text-black rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Communities
            </Link>
            <Link
              to="/communities"
              className="p-2 hover:bg-blue-200 hover:text-black rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="p-2 hover:bg-blue-200 hover:text-black rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan & Design
            </Link>

            {/* Mobile Button
            <div className="pt-4">
              <button>get</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Overlay for when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
