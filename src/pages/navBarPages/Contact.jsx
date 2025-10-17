import assets from "../../assets/assests";
import Discovery from "../../components/Discovery";
import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Card from '../../components/Card'
import {
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div>
        <Hero img={assets.contactImage} title={"contact us at"} />
      </div>
      <section>
        {/* Left Section */}
        <Discovery />
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="text-black  m-10 mt-10">
            <div className="p ">
              <h2 className="font-semibold text-xl items-center justify-center ">
                Our Offices
              </h2>
              <div>
                 <ul className="space-y-2 text-[14px]">
                    <li className="text-black flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red" />
                      39, 1st Circular Cresent Cantoment, Accra, Ghana
                    </li>
                    <li className="text-black flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red" />
                      Digital Address: GL059-9755
                    </li>
                    <li className="text-black flex items-center gap-2">
                      <FaPhone className="text-red" />
                      +1 (469) 410-9683, +233-54-931-1202
                    </li>
                    <li className="text-black flex items-center gap-2">
                      <MdEmail className="text-red" />
                      info@honest-builders.com
                    </li>
                  </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10">
           <Form />
          </div>
        </div>
        <Card title={'Apply to Career Services'} text={'Are you a professional at what you do, do you have the skills, apply to any of our carrer services.'} cardBtn={'Apply'}/>
      </section>
    </>
  );
};

export default Contact;
