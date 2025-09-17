import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Why Honest-Builders?",
    answer:
      "We will not lie, cheat, or use dishonest gain to our advantage. Honesty and transparency are the keys to your peace of mind in the real estate industry when building your dream home. Honest Builders is making building homes fun again. Creating a harmonized building construction experience and delivering quality services to those in the diaspora",
  },

  {
    id: 2,
    question: "How does it work?",
    answer:
      "Building a home may be one of the most significant investments you will ever make. Before you build, please research the builder's background and reputation with customers, as well as their years in business. We aim to streamline the construction process by eliminating family mishaps and delivering our clients with sustainable housing for those in the diaspora.",
  },
  {
    id: 3,
    question: "How Do I Get Started?",
    answer:
      "Bring your vision/plan and curiosity by getting to know the builders. A simple phone call or email to our friendly, experienced, knowledgeable, and trustworthy team will help initiate and answer all your questions. Ask about the type of building and design process, and what warranties come with building your home with us. The process may take time to complete your dream home, so we've created a stress-free process that will put you at ease with our team of experts.",
  },
  {
    id: 4,
    question: "What kind of support is available?",
    answer:
      "At Honest Builders, our commitment to your satisfaction continues with us, whether you choose us or another builder. We're committed to helping you find your dream home for your family. We are pleased to provide Customer Care Representatives to navigate you through the beginning of your project and help to answer any reservations you may have regarding building with Honest Builders",
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
