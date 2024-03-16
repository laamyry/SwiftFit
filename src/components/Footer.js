import React from "react";
import logo from "../Assets/SwiftFit-lighter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-[var(--primary-color)] h-80 mt-8 text-[var(--third-color)] flex">
          <div className="footer-logo flex flex-1 p-5 justify-center h-full self-center">
            <img
              className="w-40 self-center"
              src={logo}
              alt="logo"
            />
            <ul className="flex flex-row gap-3 text-[0.9rem] ml-6 flex-wrap self-center justify-between">
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
          </div>
          <div className="flex self-center py-2 h-[90%] border-r-2" />
          <div className="flex flex-1 p-5 h-full self-center text-center">
            <div className="flex flex-col self-center ">
              <h1 className="footer-title uppercase mb-5 font-bold text-[var(--second-color)]">
                Stay Connected with SwiftFit
              </h1>
              <p className="footer-content">
                Stay updated on the latest fitness trends
                and exclusive offers by connecting with
                SwiftFit. Follow us on social media and
                subscribe to our newsletter for fitness
                tips, motivation, and special promotions.
                Join our community today to achieve your
                fitness goals with SwiftFit.
              </p>
            </div>
          </div>
          <div className="flex self-center py-2 h-[90%] border-r-2" />
          <div className="flex-1 p-5 self-center">
            <div className="h-full">
              <ul className="flex flex-wrap justify-center gap-5 m-3 text-xl">
                <li>
                  <a href="#facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#Twitter">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#Tiktok">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
              </ul>
              <div className="flex justify-center self-center">
                <h1 className="text-center footer-icons uppercase font-semibold text-[var(--second-color)]">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
