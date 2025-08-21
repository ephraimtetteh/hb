import React, { useEffect, useState } from "react";
import assets from "../assets/assests.jsx";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const images = [assets.bg5, assets.bg2, assets.bg3, assets.bg5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center">
        <img
          className="w-full h-[60vh] sm:h-[1024px] object-cover"
          src={images[currentImageIndex]}
          alt="Animation background"
        />
      </section>

      {/* Discovery Section */}
      <section className="w-full flex items-stretch h-[50px] sm:h-[60px] font-semibold">
        {/* Left Side */}
        <div className="bg-[#e9eaef] flex items-center px-3 sm:px-6  ">
          <h2 className="text-xs sm:text-sm md:text-lg whitespace-nowrap pl-10 gap-5">
            DISCOVER THE EXPERIENCE
          </h2>
        </div>

        {/* Right Side */}
        <ul className="flex items-center bg-[#1E305E] text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-x-auto scrollbar-hide  pl-20 w-full">
          <li className=" sm:px-4 sm:py-3   hover:underline cursor-pointer">
            <Link to="/trust">HOW TRUST IS BUILT</Link>
          </li>
          <li className="border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li className=" border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to={"/processes"}>OUR PROCESSES</Link>
          </li>
          <li className=" border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to={'/customercare'}>CUSTOMER CARE</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
