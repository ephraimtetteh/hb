import assets from "../../assets/assests.jsx";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-full">
          <img
            src={assets.bg5}
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-3xl md:text-5xl">
          <span className=" text-white">About Us at</span>
          <br />
          <span className="flex justify-center mt-2 text-[#a17e1e]">
            Honest Builders
          </span>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="w-full flex items-stretch h-[50px] sm:h-[80px] font-semibold">
        {/* Left Side */}
        <div className="bg-[#e9eaef] flex items-center px-3 sm:px-6">
          <h2 className="text-xs sm:text-sm md:text-lg whitespace-nowrap pl-10 gap-5">
            DISCOVER THE EXPERIENCE
          </h2>
        </div>

        {/* Right Side */}
        <ul className="flex items-center bg-[#1E305E] text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-x-auto scrollbar-hide pl-20 w-full">
          <li className="px-2 py-1 sm:px-4 sm:py-3 hover:underline cursor-pointer">
            HOW TRUST IS BUILT
          </li>
          <li className="border-l border-white px-2 py-1 sm:px-4 hover:underline cursor-pointer">
            ABOUT US
          </li>
          <li className="border-l border-white px-2 py-1 sm:px-4 hover:underline cursor-pointer">
            OUR PROCESSES
          </li>
          <li className="border-l border-white px-2 py-1 sm:px-4 hover:underline cursor-pointer">
            CUSTOMER CARE
          </li>
        </ul>
      </section>

      {/* Introduction Section */}
      <section>
        <div className="lg:w-2/3 mx-auto mt-12 px-4">
          <p className="text-center lg:leading-snug font-normal lg:text-[30px] text-xs pb-10">
            For nearly 10 years, we've heard and witnessed the heartbreaking
            stories of disappointment from those in the diaspora. Just as
            important to us, we've built an honest system—providing the highest
            level of quality, customer care, architectural beauty, and the
            reality of your dream home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="lg:px-12 px-4 lg:py-10 py-4 flex flex-col items-center">
          <img src={assets.pictures} className="max-w-full mb-10" alt="About" />

          <div className="lg:w-2/3 mx-auto">
            <p className="text-center font-normal text-xs lg:text-[30px] leading-tight mb-6">
              Behind it all is our culture of exceptional service. We flourish
              by exceeding our clients' expectations. We aim to establish a
              reputation throughout Ghana as the trusted building company for
              your home and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <div className="w-3/5 mx-auto lg:py-20">
          <h1 className="lg:text-[38px] text-center font-bold">
            MEET THE <span className="text-brown"> TEAM</span>
          </h1>

          <p className="text-xs lg:leading-snug lg:text-[30px] text-center font-normal mt-6">
            Get up close and personal and know more about our people and why you
            can trust your work with us.
          </p>
        </div>


        <div>
     picture
        </div>
      </section>

      {/* Our Story Section */}
      <section>
        <div className="flex mt-24 flex-row lg:flex-row">
          <div className="hidden lg:flex flex-col w-2/3 bg-black px-70  text-white">
            <h1 className="lg:text-[44px] font-semibold ">Our Story</h1>
            <p className="mt-2 text-xs lg:text-[32px] font-normal">
              FILLING A NEED (This is a wife's commitment)
            </p>
            <div className="mt-12">
              <p className="text-xs lg:leading-snug lg:text-[18px] font-normal ">
                If you know my husband, he's a servant leader who knows he's
                called to serve. No matter the need—whether it is one-on-one
                coaching, mentoring young men, serving the communities, or
                simply being a good father—it is his calling. “He'll tell you
                I'm listening and following the voice of God.” His 20-plus years
                in a leadership-driven environment and manufacturing landscape
                have prepared him to get you the results you desire.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-auto">
            <img
              src={assets.bg5}
              className="w-full h-full object-cover"
              alt="Our Story"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 80%, #000000 90%, #000000 100%)",
              }}
            >
              {" "}
            </div>

            <div className="lg:hidden absolute inset-0 flex flex-col  text-white bg-black/50  ">
              <h1 className="text-2xl font-bold mb-2">Our Story</h1>
              <p className="text-sm font-semibold mb-4 ">
                FILLING A NEED (This is a wife's commitment)
              </p>
              <p className="text-xs font-normal ">
                If you know my husband, he's a servant leader who knows he's
                called to serve. No matter the need—whether it is one-on-one
                coaching, mentoring young men, serving the communities, or
                simply being a good father—it is his calling. “He'll tell you
                I'm listening and following the voice of God.” His 20-plus years
                in a leadership-driven environment and manufacturing landscape
                have prepared him to get you the results you desire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
