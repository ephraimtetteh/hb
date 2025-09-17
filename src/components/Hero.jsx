import React from 'react'

const Hero = ({img, title}) => {
  return (
    <div>
      <section className="relative">
        <div className="w-full h-[100vh]">
          <img
            src={img}
            alt="About Image"
            className="w-full h-[100%] object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-3xl md:text-5xl">
          <span className=" text-white text-3xl font-semibold">
            {title}
          </span>
          <br />
          <span className="flex justify-center mt-2 text-[#a17e1e]">
            Honest Builders
          </span>
        </div>
      </section>
    </div>
  );
}

export default Hero