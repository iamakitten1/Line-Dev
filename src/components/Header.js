import React from 'react'


const Header = () => {
  
  return (
    <>
      <div className="bg-blue-500 flex justify-center items-center mt-[20px]  w-full h-screen flex-col gap-[50px] font-gilroy text-blue-600 rounded-tl-3xl rounded-tr-3xl ">
      <h1 className=" text-[36px]  capitalize">Discover one of the best <br /> learning platform </h1>
      <div className="items-center gap-[40px] flex">
        <button
          type="button"
          className="hover:bg-[#fbf5f5] hover:text-[#2C81C4]  border-[1px] border-[#efecec] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        > Join Now
        </button>
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#2C81C4] border-[1px] border-[#fcfbfb] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        > Learn More
        </button>

        
      </div>
      <div className="bg-[#f6f8fb] bg-opacity-80 max-w-[846px] max-h-[160px] w-[100%] h-[100%] rounded-2xl flex justify-between items-center p-[30px] absolute bottom-[-82px] backdrop-blur-md">
        <img className="" src="/asset/14.svg" alt="img1" />
        <img src="/asset/15.svg" alt="img2" />
        <img src="/asset/16.svg" alt="img3" />
      </div>
      </div>
    </>
  )
}

export default Header
