import React from 'react'

const MainSection = () => {
  return  (
    <>
    <div className="  flex justify-center items-center mt-[20px]  w-full h-screen flex-col gap-[50px] font-gilroy text-[#FFFFFF] rounded-tl-3xl rounded-tr-3xl relative">
      <h1 className=" text-[36px]  capitalize">Discover one of the best <br />{" "} <span className="ml-[60px]">learning platform</span> </h1>
      <div className="items-center gap-[40px] flex">
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#2C81C4]  border-[1px] border-[#FFFFFF] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        > Join Now
        </button>
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#2C81C4] border-[1px] border-[#FFFFFF] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        > Learn More
        </button>
      </div>
      <div className="bg-[#E9EBEF] bg-opacity-80 max-w-[846px] max-h-[160px] w-[100%] h-[100%] rounded-2xl flex justify-between items-center p-[30px] absolute bottom-[-82px] backdrop-blur-md">
        <img className="" src="/asset/14.svg" alt="img1" />
        <img src="/asset/15.svg" alt="img2" />
        <img src="/asset/16.svg" alt="img3" />
      </div>

    </div>
     <div className="flex mt-[10rem] justify-center items-center">
     <img src="/asset/frame-21.svg" alt="education" />
     <div className="mb-[11rem]">
       <span className=" font-gilroy text-[36px] font-bold bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] bg-clip-text text-transparent">
         Our Education System <br /> Works For You
       </span>
       <p className="w-[548px] mt-[20px] font-[400] text-[18px]">
         Lorem ipsum dolor sit amet consectetur. Odio ut lorem sapien maecenas
         lectus lobortis. Vulputate mattis penatibus sit placerat. Sed varius
         nibh massa ut fringilla amet. Massa tempor nibh condimentum
         pellentesque mauris ullamcorper.
       </p>
       <button
         type="button"
         className="bg-gradient-to-r from-[#2662D6] to-[#002241] rounded-full max-h-full max-w-full w-[129px] h-[42px] text-[#FFFFFF] font-gilroy mt-[4rem] "
       >
         Learn More
       </button>
     </div>
   </div> 
   </>
  );
}

export default MainSection
