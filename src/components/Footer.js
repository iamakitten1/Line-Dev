import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; 

const Footer = () => {
  
  const [userEmail, setUserEmail] = useState('');
  

  useEffect(() => {
    emailjs.init("service_3fl2p7z"); // Replace with your actual public key
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = { 
      user_email: userEmail, 
    };

    emailjs.send('contact_service', 'contact_form', templateParams)
      .then(() => {
        console.log('SUCCESS!');
        setUserEmail('');
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <footer className="relative mt-[10rem] w-screen h-full bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] pb-[48px] pt-[48px]">
      <div className="absolute top-[-82px] right-[50px] left-[25%] bg-[#E9EBEF] bg-opacity-80 flex justify-between items-center p-[48px] rounded-3xl max-w-[846px] max-h-[160px]">
        <span className="text-[#000000] text-[24px] font-nino">არ ჩამორჩე სიახლეებს</span>
        <form onSubmit={handleSubmit} className="flex items-center space-x-20"> 
          <input
            type="email"
            placeholder="YOUR E-MAIL ADDRESS"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="focus:outline-none bg-[#7BC7D0] bg-opacity-50 rounded-2xl w-[150px] h-[36px] placeholder:text-[#000000] placeholder:text-opacity-70 p-2"
          />
          <button type="submit" className="font-nino text-[#FFFFFF] text-[20px] bg-gradient-to-b from-[#3EDAD0] to-[#002241] rounded-3xl max-w-[120px] max-h-[36px] w-full h-full p-5 flex justify-center items-center">გამოწერა</button>
        </form>
      </div>
      <div className="flex justify-evenly mt-[5rem]">
        <div className="flex cursor-pointer flex-col">
          <span className="text-[#FFFFFF] font-gilroy text-[22px] mb-[20px]">ნავიგაცია</span>
          <nav className="flex">
            <ul className="flex gap-[25px] font-nino text-[20px] text-[#FFFFFF] flex-col">
              <li><a href="" className="hover:text-[#C3D5F2]">ჩვენ შესახებ</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">წესები და პირობები</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">კორპორატიული გაყიდვები</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">კარიერა</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex cursor-pointer flex-col">
          <span className="text-[#FFFFFF] font-gilroy text-[22px] mb-[20px]">გადახდები</span>
          <nav className="flex">
            <ul className="flex gap-[25px] font-nino text-[20px] text-[#FFFFFF] flex-col">
              <li><a href="" className="hover:text-[#C3D5F2]">გადახდის მეთოდები</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">გარანტია</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">განვადება</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col">
          <span className="text-[#FFFFFF] font-gilroy text-[22px] mb-[20px]">გამგოვყევი</span>
          <nav className="flex">
            <ul className="flex gap-[25px] font-nino text-[20px] text-[#FFFFFF] flex-col">
              <li><a href=""><img src="/asset/Facebook.svg" alt="Facebook" className="w-[150px]" /></a></li>
              <li><a href=""><img src="/asset/Youtube.svg" alt="Youtube" className="w-[150px]" /></a></li>
              <li><a href=""><img src="/asset/Instagram.svg" alt="Insta" className="w-[150px]" /></a></li>
              <li><a href=""><img src="/asset/Tiktok.svg" alt="Tiktok" className="w-[150px]" /></a></li>
            </ul>
          </nav>
        </div>
        <div className="cursor-pointer">
          <span className="text-[#FFFFFF] font-gilroy text-[22px] mb-[20px]">კონტაქტი</span>
          <nav className="flex mt-[20px]">
            <ul className="flex gap-[25px] font-nino text-[20px] text-[#FFFFFF] flex-col">
              <li><a href="" className="hover:text-[#C3D5F2]">infro@linedev.ge</a></li>
              <li><a href="" className="hover:text-[#C3D5F2]">+995 (32) 2 60 60 60 / *7777</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
