import React from 'react'
import assets from '../../assets/assests';
import Card from '../../components/Card';
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import Discovery from '../../components/Discovery';

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
                " Our services to you is our dedication to your worth ... "
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
            Services We Provide
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">
                Renovation and Remodeling
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">Electrical</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">Plumbing</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">
                Glass and Window installation and repairs
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">
                Carpentry work and installation
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
            <article className="p-5 bg-sky-50">
              <h4 className="text-1xl font-medium py-3">
                Land inquiries and purchasing
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nihil eaque quas sequi, aliquid autem!
              </p>
            </article>
          </div>

          <div className='m-auto py-4'>
            <button className='bg-sky-700 text-white p-3 rounded'>Request Our Service</button>
            </div>
        </div>

        <Card
          title={"Make an Informed Decision Today"}
          text={
            "We back ourselves up to deliver and bring the best out of anything. Making a choice on quality should never be questioned."
          }
        />
      </div>
    </div>
  );
}

export default DiscoverUs