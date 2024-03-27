import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Data/products.json";

export default function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="w-60 m-auto bg-[var(--primary-color)] rounded-br-3xl rounded-tl-3xl ">
        <h3 className="text-3xl text-center self-center uppercase font-bold text-[var(--second-color)] overflow-hidden py-3 mt-8 mb-5">
          Top Deal
        </h3>
      </div>
      <Slider className="" {...settings}>
        {data.productSlider.map((product, index) => (
          <div key={index}>
            <div className="w-60 flex flex-col bg-[var(--third-color)]  shadow-md  shadow-zinc-300 p-3 rounded-2xl relative h-[28rem] mb-4">
              <div>
                <img
                  className="bg-white w-52 h-72 object-contain"
                  src={product.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl">{product.name}</h1>
                <h2 className="text-base">
                  {product.category}
                </h2>
                <h4>
                  {product.percent !== undefined
                    ? product.price -
                      (product.price * product.sale) / 100
                    : product.price -
                      (product.price * product.sale) / 100}
                  $
                </h4>
              </div>
              <div className="relative">
                <h3>{product.price}$</h3>
                <div className="absolute bg-orange-700 h-[0.07rem] w-8 top-[0.7rem] -left-[0.1rem]" />
              </div>
              <div className="bg-[#ffaebc] text-[#f8284b] absolute p-1 px-2 rounded-tl-xl rounded-br-xl top-0 right-0">
                -{product.sale}%
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
