import React from "react";

export default function Hotsales() {
  const hotProducts = [
    {
      name: "item1",
      image: "https://picsum.photos/id/230/400/400",
      price: "19",
    },
    {
      name: "item2",
      image: "https://picsum.photos/id/120/400/400",
      price: "25",
    },
    {
      name: "item3",
      image: "https://picsum.photos/id/5/400/400",
      price: "22",
    },
    {
      name: "item4",
      image: "https://picsum.photos/id/60/400/400",
      price: "30",
    },
  ];
  const HotProducts = ({ products }) => {
    return (
      <div className="hot-products products-container flex flex-row gap-5 overflow-hidden justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col product rounded-2xl"
          >
            <img
              className=" hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"  
              src={product.image}
              alt={product.name}
            />
            <div className="uppercase font-semibold bg-slate-200 w-[95%] p-2 rounded-b-2xl flex flex-col justify-center self-center ">
              <h3>{product.name}</h3>
              <p>{product.price}$</p>
            </div>
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
