import React from 'react'
import Form from '../components/Form';

const Request = () => {
  return (
    <div className="container lg:flex justify-center sm:items-center lg:items-start p-10 gap-8 m-auto">
      <div className="lg:w-[60%]">
        <div>
          <h1 className="text-4xl font-bold py-4">CUSTOMER CARE</h1>
          <span className="border-b-2 border-gray-200 w-[50%] m-auto h-1 bg-black ">
            hb
          </span>
          <span className="border-b-2 border-gray-200 w-[50%] m-auto h-1 bg-black ">
            hb
          </span>
          <span className="border-b-2 border-gray-200 w-[50%] m-auto h-1 bg-black ">
            hb
          </span>
          <span className="border-b-2 border-gray-200 w-[50%] m-auto h-1 bg-black ">
            hb
          </span>
        </div>

        <h3 className="lg:text-2xl font-semibold py-4">
          WHAT KIND OF SUPPORT IS AVAILABLE?
        </h3>
        <div>
          <p className="py-4">
            At HB home, our commitment to your satisfaction continues with us
            whether you chose us or another builder, we’re committed to helping
            you find your dream home for your family. We are pleased to provide
            Customer Care Representatives to navigate you through the beginning
            of your project and help to answer any reservations you may have
            regarding building with HB.
          </p>
          <p className="py-4">
            A Customer Care representative will contact you with three business
            days of submission. To be serve you, please ensure you or a
            secondary contact will be available to review your concerns with a
            representative by your choice.
          </p>
        </div>
        <Form />
      </div>
      <div className="lg:w-[30%] grid gap-3 mt-3">
        <article className="bg-gray-50 p-10">
          <h4 className="py-3 font-semibold text-1xl">Emergency Service</h4>
          <p>
            In case of urgent issues (plumbing, electrical, or heating/AC), we
            have a list of service providers to contact
          </p>
        </article>
        <article className="bg-gray-50 p-10">
          <h4 className="py-3 font-semibold text-1xl">Caring For Your Home</h4>
          <p>
            For tips and more information about caring for your home, please
            review our Caring For Your Home guide.
          </p>
        </article>
        <article className="bg-gray-50 p-10">
          <h4 className="py-3 font-semibold text-1xl">Speak With A Representative</h4>
          <p>
            In case of urgent issues and you would like to speak with our represetatives 
          </p>
        </article>
        <article className="bg-gray-50 p-10">
          <h4 className="py-3 font-semibold text-1xl">For Assistance On Your Unfinished Project</h4>
          <p>
            In case of urgent Assistance for a project you started somewhere or years back and you would like a consultation
          </p>
        </article>
      </div>
    </div>
  );
}

export default Request
