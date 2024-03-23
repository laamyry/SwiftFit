import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Hotsales() {
  const hotProducts = [
    {
      name: "Dumbbells",
      image:
        "https://m.media-amazon.com/images/I/71+KDPrgeDL._AC_SL1500_.jpg",
      price: "50",
    },
    {
      name: "Yoga Mat",
      image:
        "https://m.media-amazon.com/images/I/71MfpAXE5RL._AC_SX679_.jpg",
      price: "35",
    },
    {
      name: "Performance Leggings",
      image:
        "https://m.media-amazon.com/images/I/416599WvpjL._AC_SX569_.jpg",
      price: "40",
    },
    {
      name: "Athletic Shorts",
      image:
        "https://m.media-amazon.com/images/I/61vVXZTa74L._AC_SX569_.jpg",
      price: "30",
    },
  ];
  const HotProducts = ({ products }) => {
    return (
      <div className="hot-products products-container flex flex-row gap-5 overflow-hidden justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col product rounded-2xl relative w-full h-80"
          >
            <img
              className="hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer drop-shadow-lg w-full h-60 object-contain bg-white p-3"
              src={product.image}
              alt={product.name}
              style={{
              }}
            />
            <div className="uppercase font-semibold bg-slate-200 w-[95%] p-2 rounded-b-2xl flex flex-col justify-center self-center">
              <h3>{product.name}</h3>
              <p>{product.price}$</p>
            </div>
            <button className="absolute -right-6 bottom-7 p-0 hover:scale-125 transition ease-in-out duration-300">
                <FontAwesomeIcon
                  className="py-0"
                  icon={faCartShopping}
                />
              </button>
          </div>
          
        ))}
      </div>
    );
  };
  return (
    <div className=" text-center justify-center overflow-hidden">
      <div className="w-60 m-auto bg-[var(--primary-color)] rounded-br-3xl rounded-tl-3xl">
        <h3 className="text-3xl self-center uppercase font-bold text-[var(--second-color)] overflow-hidden py-3 my-7">
          Hot Sales
        </h3>
      </div>
      <div className="">
        <HotProducts products={hotProducts} />
      </div>
    </div>
  );
}
