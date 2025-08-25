import React from 'react'
import { Link } from 'react-router-dom';

const Discovery = () => {
  return (
    <div>
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
          <li className="border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className=" border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to={"/process"}>OUR PROCESSES</Link>
          </li>
          <li className=" border-l border-white px-2 py-1  sm:px-4 hover:underline cursor-pointer">
            <Link to={"/customercare"}>CUSTOMER CARE</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Discovery