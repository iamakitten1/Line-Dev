import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // 

function Dropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative w-full bg-white rounded-3xl border border-[#2662D6] mb-6 cursor-pointer transition-all duration-300 ${
        isOpen ? 'shadow-lg' : ''
      }`}
    >
      <div
        onClick={toggleDropDown}
        className="flex justify-between items-center p-4"
      >
        <h1 className="text-[#2662D6] font-semibold text-[18px] flex-1">
          {question}
        </h1>
        <FaChevronDown
          className={`text-[#2662D6] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {isOpen && (
        <div className="p-4 text-[#3DB8B1] bg-[#f9f9f9] rounded-b-3xl transition-all duration-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
