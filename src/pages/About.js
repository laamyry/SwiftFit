import React from "react";
import HEADER from "../components/Header";
import FOOTER from "../components/Footer";
import image from "../Assets/image.jpg";

export default function About() {
  return (
    <>
      <HEADER />
      <div className="flex mt-6">
        <div className="flex-1 w-60"><img className="w-60" src={image} alt="" /></div>
        <div className="flex-1">left</div>
      </div>
      <FOOTER />
    </>
  );
}
