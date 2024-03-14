import React from "react";

export default function Hotsales() {
  const hotProducts = [
    {
      name: "item1",
      image: "https://picsum.photos/id/230/400/400",
      price: "220",
    },
    {
      name: "item2",
      image: "https://picsum.photos/id/120/400/400",
      price: "220",
    },
    {
      name: "item3",
      image: "https://picsum.photos/id/5/400/400",
      price: "220",
    },
    {
      name: "item4",
      image: "https://picsum.photos/id/60/400/400",
      price: "220",
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
              className="flex rounded-t-2xl w-80 flex-wrap"
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
      <h3 className="text-3xl uppercase font-bold text-[var(--second-color)] overflow-hidden py-5">
        Hot Sales
      </h3>
      <div className="">
        <HotProducts products={hotProducts} />
      </div>
    </div>
  );
}
