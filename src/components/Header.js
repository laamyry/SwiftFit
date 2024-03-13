import React from "react";
import "./Header.css";
import logo from "../Assets/SwiftFit-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
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
          <button>
            <FontAwesomeIcon
              className="cartbtn"
              icon={faCartShopping}
            />
          </button>
        </nav>
      </header>
    </div>
  );
}
