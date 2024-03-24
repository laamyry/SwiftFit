import React from "react";
import HEADER from "../components/Header";
import FOOTER from "../components/Footer";
import image from "../Assets/image.jpg";

export default function About() {
  return (
    <>
      <HEADER />
      <div className="flex mt-6 gap-9">
        <div className="flex-1 w-auto border h-auto self-center">
          <img className="w-auto " src={image} alt="" />
        </div>
        <div className="flex-1 w-1/3 p-4 border self-center">
          <h1 className="text-5xl uppercase font-bold mb-2">About Us</h1>
          <p className="">
          Welcome to SwiftFit – your one-stop fitness destination! Founded by passionate fitness enthusiasts, we're here to support your journey to a healthier you. Discover top-quality equipment, stylish apparel, and nutritious supplements curated to elevate your fitness experience. Whether you're a seasoned athlete or just starting out, our experienced team is committed to empowering you every step of the way. Join us today and let's make your fitness goals a reality with SwiftFit!
          </p>
        </div>
      </div>
      <FOOTER />
    </>
  );
}
