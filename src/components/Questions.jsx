import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
  question: "What is Honest-Builders?",
  answer: "Honest-Builders is a real estate development project focused on creating affordable, modern, and sustainable housing solutions for individuals and families."
},
  
  {
   id: 2,
  question: "How does it work?",
  answer: "We provide clients with access to carefully planned communities and properties. Our process involves transparent pricing, flexible payment plans, and expert guidance to make home ownership simple and stress-free."
  },
  {
    id: 3,
  question: "Is there a free trial?",
  answer: "While there's no free trial for property, we do offer site visits, detailed virtual tours, and free consultations so you can explore our projects before making a commitment."
},
  {
   id: 4,
  question: "What kind of support is available?",
  answer: "Our team offers end-to-end support, including legal documentation assistance, mortgage and financing advice, and ongoing customer service to guide you through every step of owning your home."
  },
  {
    id: 5,
  question: "Can I use it on my mobile device?",
  answer: "Yes, our online portal and mobile-friendly platform allow you to browse properties, track payments, and connect with our team anytime, anywhere."
  },
];

const App = () => {
  
  const [openItemId, setOpenItemId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start md:gap-12">
  
        {/* Left-hand section for the heading */}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center md:text-left">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right-hand section for the FAQ items */}
        <div className="md:w-2/3">
          <div className="space-y-6">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
              >
                {/* Question button/header */}
                <button
                  className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </span>

                  {/* Plus/Minus icon, rotates based on state */}
                  <svg
                    className={`w-6 h-6 text-purple-600 transform transition-transform duration-300 ${
                      openItemId === item.id ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>

                {/* Answer content, conditionally rendered with a transition effect */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItemId === item.id ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-gray-600 border-t border-gray-200 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
