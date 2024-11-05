import React from 'react';
import Dropdown from '../hooks/Dropdown';

const News = () => {
  return (
    <div className="gap-[24px] mt-[10rem] flex items-center flex-col w-full h-full">
      <h1 className="text-[36px] bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] bg-clip-text text-transparent">
        ხშირად დასმული შეკითხვები
      </h1>

      <div className="mt-[2rem] flex flex-col gap-[2rem] w-[74%] m-auto">
        {[...Array(4)].map((_, index) => (
          <Dropdown
            key={index}
            question="რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        ))}
      </div>
    </div>
  );
};

export default News;
