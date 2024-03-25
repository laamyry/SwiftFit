import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/SwiftFit-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default function Header() {
  const [showmenu, setshowmenu] = useState(false);
  const products = useSelector(
    (state) => state.cart.products
  );

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <li>
              <a href="/">
                <img className="logo" src={logo} alt="" />
              </a>
            </li>
          </div>
          <button
            className="menuIcon"
            onClick={() => {
              setshowmenu(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/equipment">Equipment</a>
            </li>
            <li>
              <a href="/apparel">Apparel</a>
            </li>
            <li>
              <a href="/nutrition">Nutrition</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="flex relative">
            <button>
              <FontAwesomeIcon
                className="cartbtn"
                icon={faCartShopping}
              />
            </button>
            <small className="flex text-white bg-red-700 w-4 h-4 absolute rounded-full left-10 top-2 justify-center">
              <h1 className="text-xs">{products.length}</h1>
            </small>
          </div>
        </nav>
        {showmenu && (
          <div
            className="module-container opacity-animtion absolute inset-0 bg-black/50 z-40 flex justify-center 
              "
          >
            <div className="module popup w-[50%] bg-slate-50/70 flex p-50 h-80 self-center rounded-3xl backdrop-blur-md">
              <ul className="p-5 flex flex-col justify-around w-full ">
                <li className="absolute right-5 top-5 text-red-600 cursor-pointer">
                  <FontAwesomeIcon
                    onClick={() => {
                      setshowmenu(false);
                    }}
                    icon={faXmark}
                  />
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <div className="border-y-[1px]"></div>
                <li>
                  <a href="/equipment">Equipment</a>
                </li>
                <div className="border-y-[1px]"></div>
                <li>
                  <a href="/apparel">Apparel</a>
                </li>
                <div className="border-y-[1px]"></div>
                <li>
                  <a href="/nutrition">Nutrition</a>
                </li>
                <div className="border-y-[1px]"></div>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <div className="border-y-[1px]"></div>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
