import React, { useState } from "react";
import productsData from "../Data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productsData.equipment.filter(
        (product) => product.category === selectedCategory
      )
    : productsData.equipment;

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
          onClick={() =>
            handleCategoryChange("Strength Training")
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Strength Training"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Strength Training
        </button>
        <button
          onClick={() => handleCategoryChange("Cardio")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Cardio"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Cardio
        </button>
        <button
          onClick={() =>
            handleCategoryChange("Yoga & Pilates")
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Yoga & Pilates"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Yoga & Pilates
        </button>
        <button
          onClick={() =>
            handleCategoryChange("Core Training")
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Core Training"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Core Training
        </button>
        <button
          onClick={() =>
            handleCategoryChange("Recovery & Mobility")
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Recovery & Mobility"
              ? "bg-[var(--second-color)]"
              : ""
          }`}
        >
          Recovery & Mobility
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 ">
        {filteredProducts.map((product, index) => (
          <div key={index} className="">
            <div className="container-item w-60 p-2 relative">
              <img
                // src={require(`../Assets/products/${1 + index}.jpg`)}
                src={product.image}
                alt=""
                className="rounded-2xl w-full h-60 object-contain bg-white p-3"
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
