import React from 'react'
import assets from '../../assets/assests';
import Discovery from '../../components/Discovery'
import Card from '../../components/Card';

const OurTrust = () => {
  return (
    <div>
      <section className="relative">
        <div className="w-full h-[80vh] ">
          <img
            src={assets.bg6}
            alt="About Image"
            className="w-full h-[100%] object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-3xl md:text-5xl">
          <span className=" text-white text-3xl font-semibold">
            How Trust Is
          </span>
          <br />
          <span className="flex justify-center mt-2 text-[#a17e1e]">Built</span>
        </div>
      </section>

      <Discovery />

      <div className="w-2/3 p-10 items-center m-auto">
        <p className="text-center">
          At Honest Builders, we know your home is the most significant
          investment you'll ever make. Whether this is your first time or your
          fifth, you're the reason we've built our business on the foundation of
          honesty and transparency
        </p>
      </div>

      {/* testimonial */}
      <div className="container gird lg:grid-cols-2 p-10 bg-[#1e035e] h-[60vh] items-center justify-center m-auto">
        <div className="m-auto items-center justify-center">
          <img
            src={assets.review}
            alt=""
            className="text-center justify-center items-center"
          />
          <p className="text-white">
            See the reviews from our satisfied customers
          </p>
        </div>
        <div className="flex overflow-x-scroll gap-3 m-auto ">
          <div className="flex gap-2 ">
            <div className="w-50%">
              <img src={assets.team5} alt="" className="w-20" />
            </div>
            <div>
              <h4>Name: </h4>
              <p>
                The house is so gorgeous my wife can't stop gushing over it.
                Quality is out of this world. Top job
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-10 items-center m-auto border-b-2 border-gray-200">
        <p className="text-center p-3">
          "The heart of man is deceiful above all things," and trust is hard to
          find, so we've dedicated ourselves to doing things right by you. Your
          peace of mind is very import to us, so we act with integrity and
          trustworthiness as core values in our relationship, and we stress the
          importance of every detail. From the initial start of to completion,
          we ensure your hard earned family resources aren't in the wrong hands.
        </p>

        <div className="bg-[#1e305e] p-6 border border-amber-400 rounded-full w-85 m-auto items-center gap-4">
          <div className="grid items-center ">
            <img src={assets.badge} alt="" className="m-auto" />
          </div>
          <div>
            <img src={assets.logo} alt="" />
          </div>
          <p className="text-center text-white w-2/3 items-center m-auto text-[14px]">
            We've made trust our cornerstone by building it in to everything we
            do, brick by brick and day after day.
          </p>
        </div>
      </div>

      {/* trust process */}
      <div className="container m-auto p-10 items-center justify-center border-gray-200 border-b-2">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 m-auto items-center justify-center p-4">
          <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust1}
              alt=""
              className="m-auto h-[90%] w-[100%]"
            />
            <p className="text-center p-3">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">ACCOUNTABILITY</span>
            </p>
          </div>
          <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust2}
              alt=""
              className="m-auto h-[90%] w-[100%]"
            />
            <p className="text-center p-3">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">RELIABILITY</span>
            </p>
          </div>
          {/* <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust3}
              alt=""
              className="m-autoh-[90%] w-[100%]"
            />
            <p className="text-center">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">LIVABILITY</span>
            </p>
          </div> */}
          <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust4}
              alt=""
              className="m-auto h-[90%] w-[100%]"
            />
            <p className="text-center p-3">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">LIVABILITY</span>
            </p>
          </div>
          <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust5}
              alt=""
              className="m-auto h-[90%] w-[100%]"
            />
            <p className="text-center p-3">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">EFFICIENCY</span>
            </p>
          </div>
          <div className="bg-blue-50 shadow h-[80vh]">
            <img
              src={assets.trust6}
              alt=""
              className="m-auto h-[90%] w-[100%]"
            />
            <p className="text-center p-3">
              Floor plans designed for{" "}
              <span className="font-semibold text-[#1e305e]">DISTINCTION</span>
            </p>
          </div>
        </div>
      </div>
        <div>
          <Card />
        </div>
    </div>
  );
}

export default OurTrust