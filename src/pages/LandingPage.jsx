import React, { useEffect, useState } from "react";
import assets from "../assets/assests.jsx";
import Discovery from "../components/Discovery.jsx";
import Questions from "../components/Questions.jsx"

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

     
      <section className="flex flex-col sm:flex-row items-center h-[90vh]">

        <img
          className="w-full h-[100%] sm:h-[640px] object-cover"
          src={images[currentImageIndex]}
          alt="Animation background"
        />
      </section>

      {/* Discovery Section */}
      <Discovery />

      <section className="p-10">
        <div className="py-10">
          <h2 className="font-bold text-3xl">Discover Aruna Property</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 m-auto gap-4 ">
          <div className="bg-slate-50 shadow p-2 rounded-xl h-[60vh] ">
            <div className="h-[80%]">
              <img
                className="rounded-xl sm:rounded-xl h-[100%] w-[100%]"
                src={assets.bg2}
                alt=""
              />

              <div className="p-2">
                <h2 className="font-bold">House 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 shadow p-2 rounded-xl  h-[60vh] ">
            <div className="h-[80%] ">
              <img
                className="rounded-xl sm:rounded-xl h-[100%]  "
                src={assets.bg2}
                alt=""
              />

              <div className="p-2">
                <h2 className="font-bold">House 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 shadow p-2 rounded-xl  h-[60vh] ">
            <div className="h-[80%]">
              <img
                className="rounded-xl sm:rounded-xl h-[100%] w-[100%]"
                src={assets.bg3}
                alt=""
              />

              <div className="p-2">
                <h2 className="font-bold">House 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex   bg-black  m-10 text-white">
            <div className="w-[50%]  md:w-1/2 py-4 flex  items-center justify-center ">
              <img src={assets.bg10} alt="" />
            </div>

            <div className="w-[50%] p-10">
              <form action="">
                <div className="grid ">
                  <label htmlFor="" className="lock text-sm font-medium">
                    {" "}
                    Full Name
                  </label>
                  <input
                    className="border text-white  mb-5 w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                    type="text"
                    placeholder="name"
                  />
                </div>

                <div className="grid">
                  <label htmlFor="" className="lock text-sm font-medium">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    className="border text-white  mb-5 w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                    type="text"
                    placeholder="email"
                  />
                </div>

                <div className="grid">
                  <label htmlFor="" className="lock text-sm font-medium">
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    className="border text-white mb-5 w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                    type="text"
                    placeholder="password"
                  />
                </div>

                <div className="grid">
                  <label
                    htmlFor="mini-message"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="mini-message"
                    name="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                    placeholder="Brief message..."
                    required
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

<section>
        {/* Question Section */}
        <Questions/>

</section>


    </div>
  );
};

export default LandingPage;
