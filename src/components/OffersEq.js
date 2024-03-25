import React from "react";
import banner from "../Assets/banner.png";
export default function Offers() {
  return (
    <div>
      <div className="h-80 ">
        <img
          className="h-80 flex w-full object-fill md:object-contain sm:object-none"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
}
