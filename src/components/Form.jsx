import React from 'react'

const Form = () => {
  return (
    <div className="bg-sky-50">
      <div className="w-[70%] m-auto py-5">
        <div className="p-10">
          <h2 className="text-3xl text-center font-semibold py-2">
            Contact Us Here
          </h2>
          <p className="text-center">
            For information or questions about our new homes or communities,
            please fill out the form below. Someone will respond to you
            promptly. For Customer Care requests, please use the Customer Care
            request form.{" "}
          </p>
        </div>

        <form className="border border-gray-200 p-5 bg-white rounded">
          <div className='flex gap-3 w-[100%]'>
            <div className="grid w-[50%]">
              <label htmlFor="" className="lock text-sm font-medium py-1">
                {" "}
                Full Name
              </label>
              <input
                className="border text-black  mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                type="text"
                placeholder="name"
                required="true"
              />
            </div>
            <div className="grid w-[50%]">
              <label htmlFor="" className="lock text-sm font-medium py-1">
                {" "}
                Email{" "}
              </label>
              <input
                className="border text-black  mb-5 w-full p-4  outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                type="text"
                placeholder="email"
                required="true"
              />
            </div>
          </div>

          <div className="grid">
            <label htmlFor="" className="lock text-sm font-medium py-1">
              {" "}
              Subject{" "}
            </label>
            <select
              name="selectSubjects"
              className="border text-black mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
            >
              <option value="Build a home">Building a home</option>
              <option value="Service">Starting new project</option>
              <option value="Consultation">Half way built project</option>
              <option value="Consultation">Building Consultation</option>
              <option value="Consultation">Service Request</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>

          <div className="grid">
            <label htmlFor="" className="lock text-sm font-medium py-1">
              {" "}
              Address{" "}
            </label>
            <input
              className="border text-black mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
              type="text"
              placeholder="Enter Address"
              required="true"
            />
          </div>

          <div className="grid">
            <label htmlFor="" className="lock text-sm font-medium py-1">
              {" "}
              Issue Type{" "}
            </label>
            <select
              name="selectSubjects"
              className="border text-black mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
            >
              <option value="Build a home">Renovation and Remodling</option>
              <option value="Service">Plumbing</option>
              <option value="Consultation">Electricals</option>
              <option value="Consultation">Installation</option>
              <option value="Consultation">Land Enquiry</option>
              <option value="Consultation">Other</option>
            </select>
          </div>

          <div className="grid">
            <label
              htmlFor="mini-message"
              className="block text-sm font-medium text-black mb-1 py-2"
            >
              Message
            </label>
            <textarea
              id="mini-message"
              name="message"
              cols={40}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm "
              placeholder="Describe your Issue"
              required="true"
            ></textarea>
          </div>
          <button className="mt-4 py-2  px-3 border border-b-gray-400 text-black rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out hover:bg-blue-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form
