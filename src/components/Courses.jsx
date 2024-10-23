import React from 'react'

const Courses = () => {
  return (
    <>
      {" "}
      <div className=" flex justify-center mt-[220px]">
        <div className="flex w-[1062px] justify-between relative left-[0px] top-[-60px]">
          <h2 className="bg-gradient-to-r ml-[79px] from-[#2763D6] to-[#0D2E6A] font-bold text-[36px] text-transparent bg-clip-text">
            კურსები
          </h2>
          <img src="./asset/Rectangle.svg" alt="rectngle" />
        </div>
        <div className="flex justify-evenly pt-[30px] items-top w-[1062px] h-[340px] rounded-b-3xl rounded-l-3xl bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] absolute">
          <p className="w-[222px] text-left font-bold text-[24px] text-white">
            განათლება უკეთესი მომავლისთვის
          </p>
          <div className="w-[619px] flex flex-col justify-left">
            <p className="text-white text-left font-normal text-[18px]">
              აღმოაჩინე ცოდნის სამყარო, რომელიც მორგებულია შენს საჭიროებებზე.
              ჩვენი ექსპერტების მიერ შექმნილი კურსები გაძლიერებს, ისწავლო,
              განვითარდე და მიაღწიო შენს მიზნებს.{" "}
            </p>
            <button className="rounded-full border-[1px] mt-[10px] border-white max-h-full max-w-full w-[130px] h-[28px] text-[12px] bg-white text-[#2C81C4]">
              იხილეთ სრულად
            </button>
          </div>
        </div>
      </div>
      <div className=" bottom-[-137px] relative flex justify-center gap-[24px]">
        <div className="flex flex-col rounded-2xl w-[194px] h-[266px] justify-evenly items-center bg-[#E9EBEFCC] ">
          <img src="./asset/html-css.svg" alt="" />
          <p className="text-[12px] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#1B5350]">
            WEB პროგრამირება
            <br /> (HTML & CSS)
          </p>
          <button className="rounded-full border-[1px] mt-[10px] border-white max-h-full max-w-full w-[137px] h-[37px] text-[12px] text-white bg-gradient-to-r from-[#2662D6] to-[#002241]">
            შეიტყვეთ მეტი
          </button>
        </div>
        <div className="flex flex-col rounded-2xl w-[194px] h-[266px] justify-evenly items-center bg-[#E9EBEFCC] ">
          <img src="./asset/cs.svg" alt="" />
          <p className="text-[12px] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#1B5350]">
            WEB პროგრამირება
            <br /> (HTML & CSS)
          </p>
          <button className="rounded-full border-[1px] mt-[10px] border-white max-h-full max-w-full w-[137px] h-[37px] text-[12px] text-white bg-gradient-to-r from-[#2662D6] to-[#002241]">
            შეიტყვეთ მეტი
          </button>
        </div>
        <div className="flex flex-col rounded-2xl w-[194px] h-[266px] justify-evenly items-center bg-[#E9EBEFCC] ">
          <img src="./asset/js.svg" alt="" />
          <p className="text-[12px] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#1B5350]">
            JAVASCRIPT-ის
            <br /> კურსი
          </p>
          <button className="rounded-full border-[1px] mt-[10px] border-white max-h-full max-w-full w-[137px] h-[37px] text-[12px] text-white bg-gradient-to-r from-[#2662D6] to-[#002241]">
            შეიტყვეთ მეტი
          </button>
        </div>
        <div className="flex flex-col rounded-2xl w-[194px] h-[266px] justify-evenly items-center bg-[#E9EBEFCC] ">
          <img src="./asset/ai.svg" alt="" />
          <p className="text-[12px] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#1B5350]">
            AI & მანქანური სწავლება
            <br /> სწავლება
          </p>
          <button className="rounded-full border-[1px] mt-[10px] border-white max-h-full max-w-full w-[137px] h-[37px] text-[12px] text-white bg-gradient-to-r from-[#2662D6] to-[#002241]">
            შეიტყვეთ მეტი
          </button>
        </div>
      </div>
    </>
  )
}

export default Courses
