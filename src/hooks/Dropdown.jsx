// Dropdown.js
import React, { useState } from 'react';

function Dropdown({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative max-w-[1062px] w-full p-4 bg-white rounded-3xl flex justify-between items-center cursor-pointer">
      <h1 className="relative flex-1 z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#2F847F]">
        {question}
      </h1>
      <img onClick={toggleDropDown} src="/asset/down.svg" alt="" />

      
      {isOpen && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2662D6] to-[#2F847F] rounded-3xl p-[1px]">
          <div className="bg-white w-full h-full rounded-3xl p-4">
            <p></p> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
