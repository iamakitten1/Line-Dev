import React from "react";
import { useState } from "react";

function Experts() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     { id: 1, src: "giorgi.svg", alt: "photo1" },
//     { id: 2, src: "vaxo.svg", alt: "photo2" },
//     { id: 3, src: "nino.svg", alt: "photo3" },
//   ];
//   const changeSlide = (direction) => {
//     const newSlide = (currentSlide + direction + slides.length) % slides.length;
//     setCurrentSlide(newSlide);
//   };
  return (
    <div className="mt-[5rem] text-center flex flex-col">
      <h1 className=" text-4xl font-bold bg-gradient-to-b from-[#2D67D8] to-[#00AEF8] bg-clip-text text-transparent">
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </h1>

      <div className=" space-y-8 flex mt-[30px] justify-center items-center">
        <img className="mr-[20px]" src="/asset/left.svg" alt="slider_left" />
        <div className="flex">
          <img src="/asset/vaxo.svg" alt="img1" />
          <img src="/asset/nino.svg" alt="img2" />
          <img src="/asset/giorgi.svg" alt="img3" />
        </div>
        <img className="mr-[20px]" src="/asset/right.svg" alt="slider_right" />
      </div>




        {/* <div className="slider mt-[30px]">
          <button className="prev mr-[20px]" onClick={() => changeSlide(-1)}>
            &#10094;
          </button>
          <div
            className="slides-container "
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: "flex",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="slide"
                style={{ minWidth: "auto" }}
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
          <button className="next mr-[20px]" onClick={() => changeSlide(1)}>
            &#10095;
          </button>
        </div> */}
      </div>
  );
}

export default Experts;
