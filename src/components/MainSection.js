import React from 'react'

const MainSection = () => {
  return  (
    <>
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
