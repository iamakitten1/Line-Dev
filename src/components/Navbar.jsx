import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-evenly items-center w-full h-full">
      <div className="text-[24px] text-[#2764D6] ">
        LINDEV
      </div>
      <div className="text-[20px] text-[#000000]">
        <nav>
          <ul className="flex items-center gap-[25px]">
            <li  className="hover:font-light cursor-pointer uppercase" onClick={() => handleScroll("courses")}>კურსები</li>
            <li className="hover:font-light cursor-pointer uppercase" onClick={() => handleScroll("aboutUs")}>ჩვენ შესახებ</li>
            <li className="hover:font-light cursor-pointer uppercase"  onClick={() => handleScroll("blog")}>ბლოგი</li>
            <li className="hover:font-light cursor-pointer uppercase" onClick={() => handleScroll("news")}>სიახლეები</li>
            <li className="hover:font-light cursor-pointer uppercase" onClick={() => handleScroll("contact")}>კონტაქტი</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
