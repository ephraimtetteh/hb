import React from 'react'
import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Discovery from '../../components/Discovery';
import assets from '../../assets/assests';

const OurProcess = () => {
  return (
    <div>
      <Hero img={assets.bg9} title={"Our Process At"} />
      <Discovery />
      <div className="w-2/3 p-10 items-center m-auto">
        <p className="text-center p-3">
          Honesty and transparency are the keys to your peace of mind when
          building your dream home. That's why Honest Builders exists. We pride
          ourselves on being proactive and walking alongside your vision for
          your dream home or commercial building, including you in every step of
          the way
        </p>
      </div>
      <div className="p-40 items-center m-auto bg-[url(/team.png)] bg-no-repeat bg-center bg-cover ">
        <div className="m-auto bg-[#0808081f] p-5 w-2/3">
          <p className="text-center p-3 m-auto text-white">
            From selecting the prefect floor plan to weekly progress updates,
            our team will keep you informd as though you are on site
          </p>
        </div>
      </div>
      <div className="container p-10 bg-[#fff4f6] m-auto items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Journey
        </h2>
        <p className="text-center">
          From a small startup to Ghana's leading Logistics platform
        </p>

        <div className="flex p-10 items-center justify-center m-auto gap-12 ">
          <div className="grid gap-20 border-r-2 border-grey">
            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-blue-950 rounded-full py-2 px-2 text-white text-[12px]">
                01
              </span>

              <div className="py-4 rounded">
                <img src={assets.trust4} alt="" className="rounded" />
              </div>

              <h3 className="text-1xl font-semibold py-2">
                Your Plan Selection
              </h3>
              <p>
                From the beginning, you're in charge. We work for you and aim to
                ensure your satisfaction with your chosen plan You can also
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

            <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-blue-950 rounded-full py-2 px-2 m-auto text-white text-[12px]">
                02
              </span>
              <div className="py-4">
                <img src={assets.phase2} alt="" />
              </div>
              <h3 className="font-semibold 1xl py-2">
                Preparing For The Phases
              </h3>
              <p>
                Your Construction will be categorized into phases for proper
                execution. We are here to drive the result, and you deserce a
                company you can trust for your biggest investment, You'll slos
                meet with our construction manager and thoroughly review the
                final steps to initiate the first phase of construction
                together.
              </p>
              <p className="grid py-2">
                <span>1. Project Discussion with The Team</span>
                <span>2. Plan Selection and Land Readiness</span>
                <span>3. Budget, Start and Estimated tiem of Completion</span>
                <span>4. House Model preparation & Design</span>
              </p>
            </div>
          </div>

          <div className="justify-content items-center">
            <div className="grid gap-20">
              <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
                <span className="bg-blue-950 rounded-full py-2 px-2 text-white text-[12px]">
                  03
                </span>

                <div className="py-4 roundede">
                  <img src={assets.trust2} alt=""  className='rounded' />
                </div>

                <h3 className="text-1xl font-semibold py-2">
                  Execution and Construction
                </h3>
                <p>
                  Once a Home or building plan is selected, it is time to make
                  it uniquely yours. Our team is ready to help customized your
                  buildable plans suitable for your specific use. Once
                  construction begins, we'll follow up with you weekly with
                  updates and photograhs of progress, sent via communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card />
    </div>
  );
}

export default OurProcess