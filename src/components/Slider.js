import React, { useState } from "react";
import "./Slider.css";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"
export default function Slider() {
  const slides = [
    {
      url: "https://picsum.photos/id/237/1000/400",
    },
    {
      url: "https://picsum.photos/id/10/1000/400",
    },
    {
      url: "https://picsum.photos/id/3/1000/400",
    },
    {
      url: "https://picsum.photos/id/7/1000/400",
    },
    {
      url: "https://picsum.photos/id/12/1000/400",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex ===  slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="max-w-full h-[500px] w-full m-auto relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-cover bg-center duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] left-0 -translate-x-0 translate-y-[-50%] text-white cursor-pointer">
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] right-0 -translate-x-0 translate-y-[-50%] text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center top-4 py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  );
}
