import React, { useState } from "react";
import productsData from "../Data/producys.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productsData.apparel.filter(
        (product) => product.category === selectedCategory
      )
    : productsData.apparel;

  return (
    <div>
      <h1 className="text-center text-2xl uppercase font-extrabold my-4">
        Products
      </h1>
      <div className="border-b-4 w-36 m-auto border-[var(--second-color)] -mt-4 mb-4" />
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => handleCategoryChange("")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === ""
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("Leggings")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Leggings"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Leggings
        </button>
        <button
          onClick={() => handleCategoryChange("Tops")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Tops"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Tops
        </button>
        <button
          onClick={() => handleCategoryChange("Shorts")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Shorts"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Shorts
        </button>
        <button
          onClick={() => handleCategoryChange("Socks")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Socks"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Socks
        </button>
        <button
          onClick={() =>
            handleCategoryChange("Undergarments")
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Undergarments"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Undergarments
        </button>
        <button
          onClick={() => handleCategoryChange("Jackets")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Jackets"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Jackets
        </button>
        <button
          onClick={() => handleCategoryChange("Swimwear")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Swimwear"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Swimwear
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 ">
        {filteredProducts.map((product, index) => (
          <div key={index} className="">
            <div className="container-item w-60 p-2 relative">
              <img
                src={`https://picsum.photos/id/${
                  index + 1
                }/240/240`}
                alt=""
                className="rounded-2xl "
              />
              <h1 className="mt-2 text-lg font-semibold">
                {product.name}
              </h1>
              <h3 className="-mt-1 text-base font-normal">
                {product.category}
              </h3>
              <h2 className="text-xl hover:text-[var(--second-color)] transition duration-300">
                ${product.price}
              </h2>
              <button className="absolute top-72 -right-9 p-0 hover:scale-125 transition ease-in-out duration-300">
                <FontAwesomeIcon
                  className="py-0"
                  icon={faCartShopping}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
