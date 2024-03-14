import React from "react";
import logo from "../Assets/SwiftFit-lighter.png";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-[var(--primary-color)] h-80 mt-8 text-[var(--third-color)] flex">
          <div className="flex flex-1 p-5 justify-center h-full self-center">
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
            <div className="flex flex-col self-center">
              <h1 className="text-2xl uppercase mb-5 font-bold text-[var(--second-color)]">
                Lorem ipsum dolor sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Pariatur earum, ad facilis
                excepturi provident eaque ipsum delectus
                fuga at porro voluptates doloribus
                voluptatum incidunt distinctio dolore
                cupiditate aut inventore nobis magni! Nihil
                voluptatum ratione exercitationem
                doloremque? Fuga obcaecati sit itaque.
              </p>
            </div>
          </div>
          <div className="flex self-center py-2 h-[90%] border-r-2" />
          <div className="flex-1 p-5">hafsa</div>
          <div className=" border-r-2" />
        </div>
      </footer>
    </div>
  );
}
