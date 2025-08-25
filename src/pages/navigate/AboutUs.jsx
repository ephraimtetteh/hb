import assets from "../../assets/assests.jsx";
import Discovery from "../../components/Discovery.jsx";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[80vh]">
          <img
            src={assets.bg5}
            alt="About Image"
            className="w-full h-[100%] object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-3xl md:text-5xl">
          <span className=" text-white text-3xl font-semibold">
            Discover Us at
          </span>
          <br />
          <span className="flex justify-center mt-2 text-[#a17e1e]">
            Honest Builders
          </span>
        </div>
      </section>

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
      <section className="border-b border-blue-200">
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
      <section className="p-10">
        <div className="w-3/5 mx-auto lg:py-3">
          <h1 className="lg:text-3xl text-center font-bold">Meet Our Team</h1>

          <p className="text-xs lg:leading-snug text-center font-normal mt-6">
            Get up close and personal and know more about our people and why you
            can trust your work with us.
          </p>
        </div>

        <div>
          <div className="border-b border-blue-200 p-10">
            <div className="m-auto grid lg:grid-cols-4 sm:grid-cols-1 gap-2">
              <div className="mx-auto grid items-center bg-gray-200 shadow-lg outline outline-none rounded">
                <div className="rounded sm:rounded">
                  <img src={assets.team4} alt="" className="m-auto" />
                </div>
                <h3 className="font-semibold py-2 text-center">
                  Sharaf Mohammend
                </h3>
                <p className="text-center text-[#1e035e]">CEO & Founder</p>

                <div className="items-center mx-auto p-1">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mx-auto grid items-center bg-gray-200 shadow-lg outline outline-none rounded">
                <div className="rounded sm:rounded">
                  <img src={assets.team5} alt="" className="m-auto" />
                </div>
                <h3 className="font-semibold py-2 text-center">
                  Sharaf Abdalla
                </h3>
                <p className="text-center text-[#1e035e]">
                  Operations Director
                </p>

                <div className="items-center mx-auto p-1">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto grid items-center bg-gray-200 shadow-lg outline outline-none rounded">
                <div className="rounded sm:rounded">
                  <img src={assets.team2} alt="" className="m-auto" />
                </div>
                <h3 className="font-semibold py-2 text-center">
                  Sharaf Mohammend
                </h3>
                <p className="text-center text-[#1e035e]">
                  Chief Technology Officer
                </p>

                <div className="items-center mx-auto p-1">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto grid items-center bg-gray-200 shadow-lg outline outline-none rounded">
                <div className="rounded sm:rounded">
                  <img src={assets.team3} alt="" className="m-auto" />
                </div>
                <h3 className="font-semibold py-2 text-center">
                  Sharaf Mohammend
                </h3>
                <p className="text-center text-[#1e035e]">
                  Chief Technology Officer
                </p>

                <div className="items-center mx-auto p-1">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-red-600 transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="flex flex-row bg-linear-to-r from-black to-100% items-start justify-center bg-[url('/story.svg')] bg-no-repeat bg-right py-40 px-10 bg-contain">
        <div className="">
          <h1 className="lg:text-[44px] font-semibold ">Our Story</h1>
          <p className="mt-2 text-xs lg:text-[16px] font-normal">
            FILLING A NEED (This is a wife's commitment)
          </p>
          <div className="mt-12">
            <p className="text-xs lg:leading-snug lg:text-[18px] font-normal w-[50%]">
              If you know my husband, he's a servant leader who knows he's
              called to serve. No matter the need—whether it is one-on-one
              coaching, mentoring young men, serving the communities, or simply
              being a good father—it is his calling. “He'll tell you I'm
              listening and following the voice of God.” His 20-plus years in a
              leadership-driven environment and manufacturing landscape have
              prepared him to get you the results you desire.
            </p>
          </div>
        </div>

        <div className=" w-[100%] h-[100%]"></div>
      </section>

      <div className="p-10">
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
          {/* Main title for the recommendation section */}
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            What Our Clients Say
          </h1>

          {/* Recommendation Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full flex items-center justify-between">
            {/* Left Navigation Arrow */}
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

            {/* Content Area */}
            <div className="flex flex-col items-center text-center px-12">
              {/* Testimonial Text */}
              <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">
                If you know my husband, he's a servant leader who knows he's
              called to serve. No matter the need—whether it is one-on-one
              coaching, mentoring young men, serving the communities, or simply
              being a good father—it is his calling. “He'll tell you I'm
              listening and following the voice of God.” His 20-plus years in a
              leadership-driven environment and manufacturing landscape have
              prepared him to get you the results you desire.
              </p>

              {/* Author's Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-500 shadow-lg">
                {/* Placeholder image. In a real application, you would use a prop for the image source */}
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

              {/* Author's Name and Title */}
              <p className="font-bold text-gray-800 text-md">LINDA</p>
              <p className="text-gray-600 text-sm">CEO, Tech Innovators</p>
            </div>

            {/* Right Navigation Arrow */}
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
      </div>
    </div>
  );
};

export default AboutUs;
