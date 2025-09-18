import assets from "../../assets/assests.jsx";
import Discovery from "../../components/Discovery.jsx";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero.jsx";

const CustomerCare = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero img={assets.bg10} title={'Customer Care'}/>

      {/* Discovery Section */}
      <Discovery />

      <div className="grid sm:grid-cols-1 mx-auto lg:py-10">
          <p className="text-center lg:leading-snug lg:text-[16px] text-xs p-10 lg:w-[70%] m-auto">
            It's one thing to build a dream home, and another to stand behind it.
            And while we take pride in the quality of our work, we want you to
            have total trust in your new home. <br /> <br />
            That's why we at Honest Builders include a 5-years structural,
            two-year mechanical and one- year functional warranty. If a problem
            should ever arise, our customer care representatives will be happy to
            help.
          </p>

          <div className="bg-blue-950 py-15 text-white items-center justify-center">
            <p className="items-center text-center">Have a customer care issues that needs attention,</p>
            <div className=" grid place-content-center m-auto p-2">
              <Link to={'/requests'}>
              <button className="bg-white text-black px-4 py-2 cursor-pointer">Contact Customer Care</button>
              </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CustomerCare;
