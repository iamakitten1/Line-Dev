import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const sliderArr = [
  { photo: "./asset/nino.svg", name: "ნინო ბერიძე", title: "App მარკეტერი" },
  { photo: "./asset/giogri.svg", name: "გიორგი ხუციშვილი", title: "ინტერიერის დიზაინერი" },
  { photo: "./asset/vaxo.svg", name: "ვახო შენგელია", title: "UI & UX დიზაინერი" },
  { photo: "./asset/nino.svg", name: "ნინო ბერიძე", title: "App მარკეტერი" },
];

export default function App() {
  return (
    <>
      <p className="bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[36px] text-center mt-[160px]">
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </p>

      <div className="flex justify-center mt-[30px] px-[60px] ml-14 mr-14 relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderArr.map((item, index) => (
            <SwiperSlide key={index} style={{ padding: "0 43px" }}> 
              <div
                className="slide-content flex justify-center items-center bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative"
                style={{
                  width: "302px",
                  height: "355px",
                  borderRadius: "30px", 
                  boxShadow: "10px 10px 13px 0px rgba(0, 0, 0, 0.25)",
                  opacity: 1,
                  position: "relative",
                  top: "1px",
                  margin: "0 24px", 
                }}
              >
                <img src={item.photo} alt={item.name} className="rounded-2xl" />
                <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
                  <h2 className="text-[20px]">{item.name}</h2>
                  <h3 className="text-[14px]">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
          background: white; 
          border-radius: 50%;
          color: #2662d6;
          border: 1px solid #2662d6; 
          z-index: 10;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
