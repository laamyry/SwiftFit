import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import productsData from "../Data/products.json";
import Quantity from "./Quantity";
import { addToCart } from "../Redux/cartReducer";
import { useDispatch } from "react-redux";

export default function Products({ addToCart }) {
  // Pass addToCart function as prop
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(); // Call addToCart function passed from the Header component
    handleClosePopup();
  };

  return (
    <div>
      <h1 className="text-center text-2xl uppercase font-extrabold my-4">
        Products
      </h1>
      <div className="border-b-4 w-36 m-auto border-[var(--second-color)] -mt-4 mb-4" />
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {productsData.equipment.map((product, index) => (
          <div key={index} className="">
            <div
              className="container-item w-60 p-2 relative cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
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
              <button
                className="absolute top-72 -right-9 p-0 hover:scale-125 transition ease-in-out duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <FontAwesomeIcon
                  className="py-0"
                  icon={faCartShopping}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
function ProductPopup({ product, onClose }) {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="module-container bg-white p-8 rounded-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img
          src={product.image}
          alt=""
          className="rounded-lg w-60 h-60 object-contain mx-auto"
        />
        <h1 className="text-xl font-semibold mt-4">
          {product.name}
        </h1>
        <p className="text-gray-700">
          {product.description}
        </p>
        <div className="flex gap-2 mt-2">
          {product.color && product.color.length > 0 ? (
            product.color.map((color, index) => (
              <button
                key={index}
                className="w-5 h-5 rounded-full mb-2"
                style={{ backgroundColor: color }}
              ></button>
            ))
          ) : (
            <button
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: "black" }}
            ></button>
          )}
        </div>
        <Quantity />
        <h2 className="text-xl font-semibold mt-2">
          ${product.price}
        </h2>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
              })
            )
          }
          className="bg-[var(--second-color)] p-2 rounded-lg float-right mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}