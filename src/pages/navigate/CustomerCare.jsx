import assets from "../../assets/assests.jsx";
import Discovery from "../../components/Discovery.jsx";

const CustomerCare = () => {
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
            Customer Care
          </span>
          <br />
          <h2 className="flex justify-center mt-2 text-white gap-2">
            {" "}
            With A<span className="text-[#a17e1e] "> Heart</span>
          </h2>
        </div>
      </section>

      {/* Discovery Section */}
      <Discovery />

      <div className="lg:w-2/3 mx-auto mt-12 px-4">
        <p className="text-center lg:leading-snug lg:text-[16px] text-xs pb-10">
          It's one thing to build a dream home, and another to stand behind it.
          And while we take pride in the quality of our work, we want you to
          have total trust in your new home. <br /> <br />
          That's why we at Honest Builders include a 10-year structural,
          two-year mechanical and one- year functional warranty. If a problem
          should ever arise, our customer care representatives will be happy to
          help.
        </p>
      </div>

      <div>
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
              Don’t wait for long,{" "}
            </span>
            <br />
            <h2 className="flex justify-center mt-2 text-white gap-2">
              {" "}
              let’s get <span className="text-[#a17e1e] "> started </span>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerCare;
