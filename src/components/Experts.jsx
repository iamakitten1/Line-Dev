import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <p className="bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[36px] text-center mt-[160px]">
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </p>

      <div className=" flex justify-center mt-[30px] pl-[60px] pr-[60px] ml-14 mr-14 ">
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          
          <SwiperSlide  >
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF]">
            <img  src="./asset/nino.svg" alt="Person 1" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">ნინო ბერიძე</h2>
              <h3 className="text-[14px]">App მარკეტერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img  src="/asset/giogri.svg" alt="Person 2" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">გიორგი ხუციშვილი</h2>
              <h3 className="text-[14px]">ინტერიერის დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          {" "}
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="object-none" src="./asset/vaxo.svg" alt="Person 3" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">ვახო შენგელია</h2>
              <h3 className="text-[14px]">UI & UX დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          {" "}
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="h-full" src="./asset/giorgi.svg" alt="Person 2" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">გიორგი ხუციშვილი</h2>
              <h3 className="text-[14px]">ინტერიერის დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center; 
          position: absolute; 
          top: 50%; 
          transform: translateY(-50%); 
        }

        .swiper-button-prev {
          left: 10px; 
        }

        .swiper-button-next {
          right: 10px; 
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          border: 1px solid;
          border-radius: 50%;
          [border-round:5]
          border-image: linear-gradient(180deg, #2662d6 0%, #3db8b1 100%) 1; 
          width: 40px;
          height: 40px;
          font-size: 15px;
          padding-top: 10px;
          color: #2662D6; 
        }
      `}</style>
    </>
  );
}
