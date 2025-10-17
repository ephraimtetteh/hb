import assets from "../../assets/assests.jsx";
import Discovery from "../../components/Discovery.jsx";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import Hero from "../../components/Hero.jsx";
import { team } from "../../data.js";
import { useState } from "react";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <Hero img={assets.bg1} title={"Discover Us At"} />

      {/* Discovery Section */}
      <Discovery />

      {/* Introduction Section */}
      <section>
        <div className="lg:w-2/3 mx-auto mt-12 px-4">
          <p className="text-center lg:leading-snug lg:text-[16px] text-xs pb-10">
            For nearly 10 years, we've heard and witnessed the heartbreaking
            stories of disappointment from those in the diaspora. Just as
            important to us, we've built an honest system—providing the highest
            level of quality, customer care, architectural beauty, and the
            reality of your dream home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="">
        <div className="lg:px-12 px-4 lg:py-10 py-4 flex flex-col items-center">
          <img src={assets.pictures} className="max-w-full mb-10" alt="About" />

          <div className="lg:w-2/3 mx-auto">
            <p className="text-center font-normal text-xs lg:text-[16px] leading-tight mb-6">
              Behind it all is our culture of exceptional service. We flourish
              by exceeding our clients' expectations. We aim to establish a
              reputation throughout Ghana as the trusted building company for
              your home and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="p-10 bg-sky-50/50">
        <div className="w-3/5 mx-auto lg:py-3">
          <h1 className="lg:text-3xl text-2xl text-center font-bold">Meet Our Team</h1>

          <p className="text-xs lg:leading-snug text-center font-normal mt-6">
            Get up close and personal and know more about our people and why you
            can trust your work with us.
          </p>
        </div>

        <div className="">
            <div className="m-auto grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 py-[6rem]">

              {
                team.map((member) => {
                  return(
                    <div key={member.id} className="relative bg-white pb-2">
                      <div className="">
                        <img src={member.img} alt="" className="rounded h-[460px] w-[100%]"/>
                      </div>
                      <h4 className="text-center py-3 font-semibold ">{member.name}</h4>
                        {readMore && 
                        <div className="absolute bg-black/70 top-15 p-4 rounded">
                          <p className="text-center font-medium text-white">{member.title}</p>
                        <small className="text-white text-[16px] text-center">{member.bio}</small>
                        </div>
                        }
                      <button onClick={() => setReadMore(prev => !prev)} className="w-[fit-content] underline items-center justify-center grid m-auto place-items-center rounded text-[12px]">{readMore ? 'Read Less': 'Read More'}</button>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-[url('/story.svg')] px-10 py-12 bottom-0 bg-no-repeat bg-cover m-10 rounded-2xl">
        <div className=" bg-black/50 text-white py-10 rounded-2xl items-center justify-center">
          <h1 className="lg:text-[44px] font-semibold px-10 text-amber-300">Our Story</h1>
          <p className="mt-2 text-xs lg:text-[16px] font-normal px-10">
            FILLING A NEED (A wife's Testimonial)
          </p>
          <div className="">
            <p className="text-xs lg:leading-snug lg:text-[16px] font-normal p-10">
            If you know my husband, he's a servant leader who knows he's called to serve. No matter the need—whether it is one-on-one coaching, mentoring young men, serving the communities, or simply being a good father—it is his calling. “he'll tell you I'm listening and following the voice of God.” His 20-plus years of experience in leadership-driven environments and operations have prepared him to deliver the results you desire.
            </p>
          </div>
        </div>

        <div className=" w-[100%] h-[100%]"></div>
      </section>

      {/* <div className="p-10">
        <div className="min-h-screen w-full flex flex-col items-center justify-center font-sans">
         
          <h1 className="text-4xl sm:text-2xl text-center p-3 font-bold text-gray-800 mb-12">
            What Our Clients Say
          </h1>

  
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full flex items-center justify-between">
         
            <button className="absolute left-4 bg-gray-200 text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

           
            <div className="flex flex-col items-center text-center px-12">
              <p className=" text-gray-700 text-lg mb-6 leading-relaxed">
                If you know my husband, he's a servant leader who knows he's
                called to serve. No matter the need—whether it is one-on-one
                coaching, mentoring young men, serving the communities, or
                simply being a good father—it is his calling.
              </p>

            
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-500 shadow-lg">
                <img
                  src="https://placehold.co/80x80/0000FF/FFFFFF?text=L"
                  alt="Linda"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/80x80/CCCCCC/000000?text=Error";
                  }}
                />
              </div>

              <p className="font-bold text-gray-800 text-md">LINDA</p>
              <p className="text-gray-600 text-sm">CEO, Tech Innovators</p>
            </div>

            <button className="absolute right-4 bg-gray-200 text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>  */}
    </div>
  );
};

export default AboutUs;
