const Header = () => {
  return (
    <> 
      <section className="w-11/12  top-[65px]  ml-[80px] mr-[80px] mt-[30px] h-screen max-w-[] max-h-[500px] relative m-auto  bg-gradient-to-r from-[#2662D6] via-sky-500 to-[#3DB8B1] rounded-tl-3xl  rounded-tr-3xl 
        flex flex-col items-center justify-center ">

       
        <div className="absolute z-0 top-0 left-0">
          <img className="rounded-tl-[30px]" src="/asset/Frame1.png" alt="Decorative Frame Top Left" />
        </div>

        <div className="absolute z-0 top-[330px] left-[245px]">
          <img src="/asset/Frame2.png" alt="Decorative Frame Center Left" />
        </div>

        <div className="w-[293px] h-[293px] bg-[#39B1E4] rounded-full absolute z-0 top-[71px] left-[800px] blur-md">
          <div className="w-[101px] h-[101px] bg-[#84D0F0] rounded-full absolute top-[48px] right-[48px] blur-md"></div>
        </div>

        <div className="absolute z-0 right-[75px] bottom-[-10px]">
          <img className="rotate-[-80deg]" src="/asset/Frame2.png" alt="Decorative Frame Bottom Right" />
        </div>

        
        <h2 className="z-10 text-center text-4xl font-black text-white leading-[47px]">
          Discover One Of The Best 
        </h2>

        <h2 className="z-10 text-center text-4xl font-black text-white mb-11">
          Learning Platform
        </h2>

       
        <div className="w-full flex justify-center z-10">
          <button className="bg-white font-black rounded-[30px] text-sm p-[12px] px-[18px] text-[#2C81C4] hover:bg-gray-100 transition-colors">
            Join Now
          </button>
          <button className="ml-10 font-black rounded-[30px] text-sm border border-white text-white p-[12px] px-[18px] hover:bg-white hover:text-[#2C81C4] transition-colors">
            Learn More
          </button>
        </div>

        <div className="flex w-[67%] bg-[#E9EBEFCC] absolute z-10 h-40 justify-around items-center translate-y-[240px] rounded-[30px]">
          <img src="/asset/Program.png" alt="Program Feature Icon" />
          <img src="/asset/News.png" alt="News Feature Icon" />
          <img src="/asset/Portfolio.png" alt="Portfolio Feature Icon" />
        </div>
        
      </section>
    </>
  );
}

export default Header;
