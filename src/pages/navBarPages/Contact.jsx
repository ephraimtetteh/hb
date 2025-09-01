import assets from "../../assets/assests";
import Hero from "../../components/Hero";
const Contact = () => {
  return (
    <>
      <div>
        <Hero img={assets.bg8} title={"contact us at"} />
      </div>

      <section>
        {/* Left Section */}

        <div className="grid grid-cols-2">
          <div className="text-black  m-10 mt-10">
            <div className="md:1/2 py-3 flex items-center justify-center relative">
              <img
                src={assets.gold}
                alt="contact-us image"
                className="relative bottom-45 mr-20 "
              />
            </div>
            <div className="pb-10 ">
              <h2 className="font-semibold text-xl items-center justify-center ">
                Our Offices
              </h2>
              <h2 className="font-semibold text-xl pt-6">Volta Office</h2>
              <p className="text-sm pt-6">
                13785 Research Blvd.Suite 150 Austin, TX 78750(512) 834-8429
              </p>
              <h2 className="font-semibold text-xl pt-6 ">Northern Office</h2>
              <p className="text-sm pt-6">
                13785 Research Blvd.Suite 150 Austin, TX 78750(512) 834-8429
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-20">
            <h2 className="font-semibold text-xl items-center justify-center">Contact Us Here</h2>
            <p className=" pt-6">
              For information or questions about our new homes or communities,
              please fill out the form below. Someone will respond to you
              promptly. For Customer Care requests, please use the Customer Care
              request form.
            </p>
            <div className="p-10 mt-10">
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
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="mini-message"
                    name="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm "
                    placeholder="Brief message..."
                    required
                  ></textarea>
                </div>
                <button className="mt-4 py-2  px-3 border border-b-gray-400 text-black rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out hover:bg-blue-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
