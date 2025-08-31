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
              <p className='font-semibold'>
                " Our services to you is our dedication to your worth ... "
              </p>
            </div>
          </div>

          <div>
            <img src={assets.serviceHero} alt="" />
          </div>
        </div>

        {/* process */}

        <div className="py-10 items-center justify-center mx-auto">
          <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
            Our Service Process
          </h2>
          <p className="text-center">
            A streamlined process that connects builders with trusted homes
            through Honest builders team
          </p>

          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mx-auto items-center justify-center p-10 gap-4">
            <div className="items-center justify-center shadow bg-blue-50 p-3 hover:bg-blue-100 cursor-pointer">
              <div className=" w-10 rounded-full p-2">
                <TbBrandBooking size={32} />
              </div>
              <div className="py-2">
                <h2 className="text-1xl font-medium">Appointment Booking</h2>
              </div>
              <p>
                Book an appointment with our team with your details through our
                simple booking form
              </p>
            </div>

            <div className="items-center justify-center shadow bg-blue-50 p-3 hover:bg-blue-100 cursor-pointer">
              <div className=" w-10 rounded-full p-2">
                <FaProjectDiagram size={32} />
              </div>
              <div className="py-2">
                <h2 className="text-1xl font-medium">Project Discussion</h2>
              </div>
              <p>
                Our team of experts will have a comprehensive discussion with
                you to discuss the project details
              </p>
            </div>

            <div className="items-center justify-center shadow bg-blue-50 p-3 hover:bg-blue-100 cursor-pointer">
              <div className="w-10 rounded-full p-2">
                <RiTeamLine size={32} />
              </div>
              <div className="py-2">
                <h2 className="text-1xl font-medium">
                  Our Team Assigns Qualified Experts
                </h2>
              </div>
              <p>We match your project with a trusted engieneers</p>
            </div>
            <div className="items-center justify-center shadow bg-blue-50 p-3 hover:bg-blue-100 cursor-pointer">
              <div className=" w-10 rounded-full p-2">
                <CiTimer size={32} />
              </div>
              <div className="py-2">
                <h2 className="text-1xl font-medium">Track in Real-Time</h2>
              </div>
              <p>Monitor your project progress with real-time updates.</p>
            </div>
          </div>
        </div>

        <Discovery />

        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-grey
      "
        >
          <div>
            <img src={assets.booking} alt="" />
          </div>

          <div className="">
            <div className=" py-2 font-semibold text-2xl">
              <h2>Appointment Booking</h2>
            </div>
            <p className="py-2">
              Book shipment in minutes with instant quotes.
            </p>

            <div className="grid gap-4 w-5/6">
              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Dynamic Pricing:{" "}
                      </span>
                      Get instant quotes based on project type, work and
                      distance
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Easy Booking Process:{" "}
                      </span>
                      A simple, step-by-step process to book your appointment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Multiple Payment Options:{" "}
                      </span>
                      Choose from credit card, mobile money, or bank transfer
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Transparent Cost:{" "}
                      </span>
                      No hidden fees --- see the full cost upfront upon service
                      request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 w-32"></div>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-grey
      "
        >
          <div className="">
            <div className=" py-2 font-semibold text-2xl">
              <h2>Real-Time Tracking</h2>
            </div>
            <p className="py-2">Track your shipment anytime, anywhere.</p>

            <div className="grid gap-4 w-5/6">
              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        GPS-enabled tracking:{" "}
                      </span>
                      Follow your shipment's journey on an interactive map
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Milestone Notification:{" "}
                      </span>
                      Get alert for key events like pickup, transit, and
                      delivery
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Estimated Delivery Times:{" "}
                      </span>
                      Know exactly when your shipment will arrive
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Weather-Proofing:{" "}
                      </span>
                      Recieve alerts and solutions for weather sensitive cargo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 w-32"></div>
          </div>

          <div>
            <img src={assets.realtime} alt="" />
          </div>
        </div>

        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-grey
      "
        >
          <div>
            <img src={assets.project} alt="" />
          </div>

          <div className="">
            <div className=" py-2 font-semibold text-2xl">
              <h2>Project Discussion</h2>
            </div>
            <p className="py-2">
              Book shipment in minutes with instant quotes.
            </p>

            <div className="grid gap-4 w-5/6">
              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Multiple Payment Options:{" "}
                      </span>
                      Pay with credit card, Paystack, or bank transfer
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Automated Invocing:{" "}
                      </span>
                      Generate and send invoice automatically on service request
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Payment Tracking:{" "}
                      </span>
                      Monitor payment status and history in real-time anytime
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <div className="bg-red rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    <p className="text-[12px]">
                      <span className="text-[14px] font-medium">
                        Fraud Prevention and Protection:{" "}
                      </span>
                      Advanced security measures to protect your transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 w-32"></div>
          </div>
        </div>

        <Card />
      </div>
    </div>
  );
}

export default DiscoverUs