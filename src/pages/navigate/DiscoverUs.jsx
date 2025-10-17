import React from 'react'
import assets from '../../assets/assests';
import Card from '../../components/Card';
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import Discovery from '../../components/Discovery';
import { Link } from 'react-router-dom';
import { services } from '../../data';

const DiscoverUs = () => {
  return (
    <div>
      <div className="">
        <div className="grid lg:grid-flow-col 2 md:grid-cols-1 sm:grid-cols-1 gap-2 bg-blue-50 sm:p-5 items-start">
          <div className="p-10">
            <small className="text-red border solid rounded-full p-2 bg-blue-200">
              Building Made Simple
            </small>
            <div className="py-3 text-3xl font-semibold">
              <h1>Our Services</h1>
            </div>
            <div className="w-2/3">
              <p className="font-semibold">
                We offer engineering, planning, design, construction, and maintainace services for homes and new builds, including prefabricated and temporary structures, eletrical, plumbing, AC, residential construction and emergency repairs nation wide 
              </p>
            </div>
          </div>

          <div>
            <img src={assets.serviceHero} alt="" />
          </div>
        </div>

        {/* process */}
        <Discovery />

        <div className="p-10 m-auto">
          <h2 className="text-2xl font-semibold text-center p-5">
            Services and Capabilities
          </h2>

          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
           {
              services.map((service) => {
                return(
                  <article className="p-5 bg-sky-50/25 border border-sky-100 rounded-2xl hover:shadow hover:border-gray-200">
                  <h4 className="text-1xl font-semibold py-3">{service.title}</h4>
                  <img src={service.img} alt="" className="rounded-2xl pb-2 w-[100%] h-[280px]" />
                  <p className='text-[12px]'>{service.text}</p>
                </article>
                )
              })
           }
          </div>

          <div className="m-auto py-4">
            <Link to={"/contact"}>
              <button className="bg-[#1e305e] text-white p-3 rounded">
                Request Our Service
              </button>
            </Link>
          </div>
        </div>

        <Card
          title={"Make an Informed Decision Today"}
          text={
            "We back ourselves up to deliver and bring the best out of anything. Making a choice on quality should never be questioned."
          }
          cardBtn={"Contact Us"}
        />
      </div>
    </div>
  );
}

export default DiscoverUs