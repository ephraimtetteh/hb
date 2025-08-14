import React, { useEffect, useState } from "react";
import assets from "../assets/assests.jsx";

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
          className="w-full sm:w-1/2 h-[60vh] sm:h-[1024px] object-cover"
          src={images[currentImageIndex]}
          alt="Animation background"
        />
      </section>

      {/* Discovery Section */}
      <section className="bg-[#e9eaef] font-semibold w-full flex items-center justify-between px-2 sm:px-4">
        {/* Left Side */}
        <h2 className="text-xs sm:text-sm md:text-base whitespace-nowrap mr-3">
          DISCOVER THE EXPERIENCE
        </h2>

        {/* Right Side */}
        <ul className="flex items-center bg-[#1E305E] text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-x-auto ">
          <li className="p-2 sm:p-3 md:p-4 hover:bg-blue-900 cursor-pointer">
            HOW TRUST IS BUILT
          </li>
          <li className="border-l border-white p-2 sm:p-3 md:p-4 hover:bg-blue-900 cursor-pointer">
            ABOUT US
          </li>
          <li className="border-l border-white p-2 sm:p-3 md:p-4 hover:bg-blue-900 cursor-pointer">
            OUR PROCESSES
          </li>
          <li className="border-l border-white p-2 sm:p-3 md:p-4 hover:bg-blue-900 cursor-pointer">
            CUSTOMER CARE
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
