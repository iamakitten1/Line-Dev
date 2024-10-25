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

      <div className="flex justify-center mt-[30px] pl-[60px] pr-[60px]">
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/asset/vaxo.svg" alt="img1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/asset/nino.svg" alt="img2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/asset/giorgi.svg" alt="img3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/asset/vaxo.svg" alt="img1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/asset/nino.svg" alt="img2" />
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
