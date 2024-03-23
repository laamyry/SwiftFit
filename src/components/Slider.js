import React, { useState } from "react";
import image1 from "../Assets/1.jpeg";
import image2 from "../Assets/2.jpg";
import image3 from "../Assets/3.jpg";
import image4 from "../Assets/4.jpeg";
import image5 from "../Assets/5.jpg";
import "./Slider.css";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function Slider() {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
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
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-full h-[500px] w-full m-auto relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: "center top",
        }}
        className="w-full h-full bg-cover bg-center duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] m-5 p-2 rounded-xl left-0 -translate-x-0 translate-y-[-50%] text-white cursor-pointer bg-black/20 ">
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] m-5 p-2 rounded-xl right-0 -translate-x-0 translate-y-[-50%] text-white cursor-pointer bg-black/20">
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
        />
      </div>
      <div className="flex justify-center top-4 py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              style={{
                color:
                  slideIndex === currentIndex
                    ? "var(--second-color)"
                    : "black", // Change 'red' to your desired color for the current dot
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
