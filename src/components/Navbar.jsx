
import React from 'react';

const Navbar = ({ onCoursesClick, onAboutUsClick, onBlogClick, onNewsClick, onContactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white z-50 flex justify-evenly items-center ">
      <div className="text-[24px] text-[#2764D6] ">LINDEV</div>
      <nav className="text-[20px] text-[#000000]">
        <ul className="flex items-center gap-[25px]">
          <li className="hover:font-light cursor-pointer uppercase" onClick={onCoursesClick}>კურსები</li>
          <li className="hover:font-light cursor-pointer uppercase" onClick={onAboutUsClick}>ჩვენ შესახებ</li>
          <li className="hover:font-light cursor-pointer uppercase" onClick={onBlogClick}>ბლოგი</li>
          <li className="hover:font-light cursor-pointer uppercase" onClick={onNewsClick}>სიახლეები</li>
          <li className="hover:font-light cursor-pointer uppercase" onClick={onContactClick}>კონტაქტი</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
