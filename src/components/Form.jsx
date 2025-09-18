import { useState } from "react"
//import nodemailer from 'nodemailer'

const issuses = [
  "Renovation and Remodling",
  "Plumbing",
  "Electricals",
  "Installation",
  "Land Enquiry",
  'others'
];

const Form = () => {
  const [issue, setIssue] = useState('Plumbing')
  const [user, setUser]= useState({
    name: '', 
    email: '',
    address: '',
    message: ''
  }

  
)

const handleChange = (e) => {
  setUser({...user, [e.target.name] :e.target.value})
}

const handleIssue = (e) => {
  setIssue(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(user)


  // Create a test account or replace with real credentials.
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: "maddison53@ethereal.email",
  //     pass: "jn7jnAPss4f63QBp6D",
  //   },
  // });

  // Wrap in an async IIFE so we can use await.
  // (async () => {
  //   const info = await transporter.sendMail({
  //     from: `${user.name} ${user.email}`,
  //     to: "honest-builder.com",
  //     subject: `${user.message}`,
  //     text: `${user.message}`, // plain‑text body
  //     html: <b>`${user.message}`</b>, // HTML body
  //   });

  //   console.log("Message sent:", info.messageId);
  // })();
}
  return (
    <div className="bg-sky-50">
      <div className="lg:w-[70%] sm:w-[100%] m-auto py-5 grid sm:grid-cols-1">
        <div className="p-10">
          <h2 className="text-3xl text-center font-semibold py-2">
            Contact Us Here
          </h2>
          <p className="text-center sm:w-[100%] sm:px-2">
            For information or questions about our new homes or communities,
            please fill out the form below. Someone will respond to you
            promptly. For Customer Care requests, please use the Customer Care
            request form.{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border border-gray-200 p-5 bg-white rounded">
          <div className="flex gap-3 w-[100%]">
            <div className="grid w-[50%]">
              <label htmlFor="" className="lock text-sm font-medium py-1">
                {" "}
                name
              </label>
              <input
                className="border text-black  mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
                type="text"
                placeholder="name"
                required
                name="name"
                value={user.name}
                onChange={handleChange}
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
                required
                name="email"
                value={user.email}
                onChange={handleChange}
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
              required
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <label htmlFor="" className="lock text-sm font-medium py-1">
              {" "}
              Issue Type{" "}
            </label>
            <select
              name="issue"
              id="issue"
              className="border text-black mb-5 w-full p-4 outline-none border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out resize-y text-sm"
            >
              value={issue}
              onChange={handleIssue}
              {issuses.map((issue) => {
                return <option key={issue}>{issue}</option>
              })}
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
              required
              value={user.message}
              onChange={handleChange}
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
