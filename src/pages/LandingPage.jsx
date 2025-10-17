import React, { useEffect, useState } from "react";
import assets from "../assets/assests.jsx";
import Discovery from "../components/Discovery.jsx";
import Questions from "../components/Questions.jsx"
import Form from "../components/Form.jsx";
import { coreValues } from "../data.js";

const LandingPage = () => {
  const images = [assets.bg5, assets.bg2, assets.bg3, assets.bg5, assets.hbh2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCoreValues, setIsCoreValues] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-1 items-center h-[90vh] w-full">

        <img
          className="w-full h-[100%] sm:h-[640px] object-cover"
          src={images[currentImageIndex]}
          alt="Animation background"
        />
        <h1 className="font-semibold absolute left-0 right-0 text-white m-auto text-center text-3xl lg:w-[50%] sm:text-1xl sm:w-[80%]"> " Our services to you is our dedication to <span className="lg:text-6xl text-amber-200 sm:text-3xl sm:w-[80%]"> your worth ... </span> "</h1>
      </section>

      {/* Discovery Section */}
      <Discovery />

      <div className="border-b-2 border-blue-50">
        <div className='bg-[url("/story.svg")] bg-no-repeat bg-cover bg-center p-10 rounded m-auto my-20 text-white mx-10 '>
          <div>
            <p className='font-semibold border rounded-full p-2 w-[fit-content] border-blue-900 md:text-[14px]'>Our Core Values</p>
            { 
              !isCoreValues ? 
                <div>
                  <h2 className='py-2 text-4xl font-semibold text-blue-300 sm:text-2xl sm:font-medium'>Trust, Relationship, Dedication, Commitment</h2> 
                </div>
            
            :
              coreValues.map((corevalue) => {
                  return (
                    <div className="">
                    <div className="py-4">
                      <h4 className="text-3xl pb-2 font-semibold text-amber-200">{corevalue.title}</h4>
                      <p>{corevalue.text}</p>
                    </div>
                    </div>
                  )
                
              })
              
          }
           <button className='bg-white text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white rounded cursor-pointer' onClick={() => setIsCoreValues(prev => !prev)}>{isCoreValues? 'Show less': 'Explore More'}</button>
          </div>
        </div>
      </div>

      <section className="p-10">
        <div className="py-10">
          <h2 className="font-bold text-3xl">The Foundation</h2>
          <p>We Stand On Values/ Vision/ Purpose</p>
        </div>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 m-auto gap-4 ">
          <div className="bg-slate-50 shadow p-2 rounded-xl">
            <div className="w-[100%]">
              <img
                className="rounded-xl sm:rounded-xl h-[100%] w-[100%]"
                src={assets.hb3}
                alt=""
              />

              <div className="p-2">
                 <div className="py-2">
                  <h2 className="font-semibold text-2xl">Mission</h2>
                  <p>We stand for</p>
                </div>
                <p>Creating a harmonized building construction experience and delivering quality services to those in the diaspora</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 shadow p-2 rounded-xl">
            <div className="w-[100%]">
              <img
                className="rounded-xl sm:rounded-xl h-[100%] w-[100%]"
                src={assets.bg2}
                alt=""
              />

              <div className="p-2">
                 <div className="py-2">
                  <h2 className="font-semibold text-2xl">Vision</h2>
                  <p>We stand to</p>
                </div>
                <p>Manifest clients vision into a reality</p>
              </div>
            </div>
          </div>

        

          <div className="bg-slate-50 shadow p-2 rounded-xl">
            <div className="w-[100%]">
              <img
                className="rounded-xl sm:rounded-xl h-[100%] w-[100%]"
                src={assets.hbh2}
                alt=""
              />

              <div className="p-2">
                <div className="py-2">
                  <h2 className="font-semibold text-2xl">Goals</h2>
                  <p >We stand for</p>
                </div>
                <p className="grid gap-2">Honest Builders will go to work on your behalf with your, 
                  <span>1. Hard Earned Money</span> 
                  <span>2. Vision and Plan</span> 
                  <span>3. Deliver Results</span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form />

<section>
        {/* Question Section */}
        <Questions/>

</section>


    </div>
  );
};

export default LandingPage;
