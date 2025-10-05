import React from 'react'
import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Discovery from '../../components/Discovery';
import assets from '../../assets/assests';
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";

const OurProcess = () => {
  return (
    <div>
      <Hero img={assets.bg9} title={"Our Process At"} />
      <Discovery />
      <div className="lg:w-2/3 p-10 items-center m-auto">
        <p className="text-center">
          Honesty and transparency are the keys to your peace of mind when
          building your dream home. That's why Honest Builders exists. We pride
          ourselves on being proactive and walking alongside your vision for
          your dream home or commercial building, including you in every step of
          the way
        </p>
      </div>
      <div className="p-40 items-center m-auto bg-[url(/team.png)] bg-no-repeat bg-center bg-cover ">
        <div className="m-auto bg-[#0808081f] lg:w-2/3 sm:w-[100%]">
          <p className="text-center p-3 text-white">
            From selecting the prefect floor plan to weekly progress updates,
            our team will keep you informd as though you are on site
          </p>
        </div>
      </div>

      {/* Our service process */}

      <div className="py-10 items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Process
        </h2>
        <p className="text-center px-10">
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
              Our team of experts will have a comprehensive discussion with you
              to discuss the project details
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

      {/* Our process breakdown */}

      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-gray-200 overflow-auto">
          <div className="sm:w-xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex w-2xl">
                    <p className="text-[12px] ">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-gray-200">
          <div>
            {/* <img src={assets.project} alt="" /> */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-gray-200">
          <div className="">
            <div className=" py-2 font-semibold text-2xl">
              <h2>Real-Time Tracking</h2>
            </div>
            <p className="py-2">Track your shipment anytime, anywhere.</p>

            <div className="grid gap-4 w-5/6">
              <div className="flex gap-3 items-center justify-center">
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex  w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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

          {/* <div>
            <img src={assets.realtime} alt="" />
          </div> */}
            </div>
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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
                <div className="bg-blue-500 rounded-full w-2 p-2">
                  <span className="w-1"></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-2xl">
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

       
      </div>

      {/* our Journey */}

      <div className="container p-10 bg-[#fff4f6] m-auto items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Journey
        </h2>
        <p className="text-center">Well planned Journey to Your Dream Home</p>

        <div className="lg:flex lg:p-10 sm:py-2 md:py-2 items-center justify-center m-auto lg:gap-12">
          <div className="grid gap-10 lg:border-r-2 lg:border-gray-400 mb-10">
            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow ">
              <span className="bg-blue-950 rounded-full py-2 px-2 text-white text-[12px]">
                01
              </span>

              <div className="py-4 rounded">
                <img src={assets.trust4} alt="" className="rounded" />
              </div>

              <h3 className="text-2xl font-semibold py-2">
                Your Plan Selection
              </h3>
              <p>
                From the beginning, you're in charge. We work for you and strive to
                ensure your satisfaction with your chosen plan. You can also
                select from our srchitectural designs and floor plans, which are
                ideal for your family or business.
              </p>

              <p className="py-2">
                Our dedicated engineers, maisons, service providers and field
                tech supervisor team will help you dind the perfect home with a
                stress free process that checks all the boxes
              </p>

              <p className="py-2">
                Your project may be an unfinished home alredy under
                construction, or you may choose a plan and build from scratch;
                Our services to you is a testament to our dedication to your
                worth.
              </p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow">
              <span className="bg-blue-950 rounded-full py-2 px-2 m-auto text-white text-[12px]">
                02
              </span>
              <div className="py-4">
                <img src={assets.phase2} alt="" />
              </div>
              <h3 className="font-semibold text-2xl py-2">
                Preparing For The Phases
              </h3>
              <p>
                Your Construction will be categorized into phases for proper
                execution. We are here to drive the result, and you deserve. a
                company you can trust for your biggest investment, You'll also
                meet with our construction manager and thoroughly review the
                final steps to initiate the first phase of construction
                together.
              </p>
              <p className="grid py-2">
                <span>1. Project Discussion with The Team</span>
                <span>2. Plan Selection and Land Readiness</span>
                <span>3. House Model preparation & Design</span>
                <span>4. Budget, Start and Estimated time of Completion</span>
                <span>5. Finalize selection and model & Construction begins</span>
              </p>
            </div>
          </div>

          <div className="justify-content items-center">
            <div className="grid gap-10">
              <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow">
                <span className="bg-blue-950 rounded-full py-2 px-2 text-white text-[12px]">
                  03
                </span>

                <div className="py-4 roundede">
                  <img src={assets.trust2} alt="" className="rounded" />
                </div>

                <h3 className="text-2xl font-semibold py-2">
                  Execution and Construction
                </h3>
                <p>
                  Once a Home or building plan is selected, it is time to make
                  it uniquely yours. Our team is ready to help customized your
                  buildable plans suitable for your specific needs. Once
                  construction begins, we'll follow up with you weekly with
                  updates and photograhs of progress, sent via your preferred method of communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card
        title={"Book a Consultation"}
        text={
          "Take action now. Talk to our customer service specialist for any questions and clarity"
        }
        cardBtn={"Book Now"}
      />
    </div>
  );
}

export default OurProcess