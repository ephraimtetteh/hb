import React from 'react'
import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Discovery from '../../components/Discovery';
import assets from '../../assets/assests';

const OurProcess = () => {
  return (
    <div>
      <Hero img={assets.bg9} title={'Our Process At'}  />
      <Discovery />
      <div className="w-2/3 p-10 items-center m-auto">
        <p className="text-center p-3">
          Honesty and transparency are the keys to your peace of mind when building your dream home. That's why Honest Builders exists. We pride ourselves on being proactive and walking alongside your vision for your dream home or commercial building, including you in every step of the way 
        </p>
        </div>
      <div className="container p-10 bg-[#fff4f6] m-auto items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Journey
        </h2>
        <p className="text-center">
          From a small startup to Ghana's leading Logistics platform
        </p>

        <div className="flex p-10 items-center justify-center m-auto w-2/3 gap-12 ">
          <div className="grid gap-20 border-r-2 border-grey">
            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 text-white text-[12px]">
                01
              </span>
              <h3 className="text-1xl font-semibold py-2">
                Tramove is Founded
              </h3>
              <p>We deliver on our promises, every time</p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                02
              </span>
              <h3 className="font-semibold 1xl py-2">Technology Upgrade</h3>
              <p>Lunch of our proprietary tracking and management platform</p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                03
              </span>
              <h3 className="font-semibold 1xl py-2">Industry Recognition</h3>
              <p>Lunch of our proprietary tracking and management platform</p>
            </div>
          </div>

          <div className="justify-content items-center">
            <div className="grid gap-20">
              <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
                <span className="bg-red rounded-full py-2 px-2 text-white text-[12px]">
                  04
                </span>
                <h3 className="text-1xl font-semibold py-2">
                  Tramove is Founded
                </h3>
                <p>We deliver on our promises, every time</p>
              </div>

              <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
                <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                  05
                </span>
                <h3 className="font-semibold 1xl py-2">Technology Upgrade</h3>
                <p>Lunch of our proprietary tracking and management platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card />
    </div>
  );
}

export default OurProcess