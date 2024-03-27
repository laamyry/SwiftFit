import React from "react";
import HEADER from "../components/Header";
import FOOTER from "../components/Footer";
import image from "../Assets/image.jpg";
import mession from "../Assets/mission.jpg";

export default function About() {
  return (
    <>
      <HEADER />
      <div className="container mt-10 flex pb-2 ">
        <div className="flex-1 w-auto h-auto self-center relative">
          <img className="w-auto " src={image} alt="" />
          <div className="bg-[#6ac43b] w-12 h-12 absolute -top-3 -right-3" />
        </div>
        <div className="flex flex-col justify-center text flex-1 pl-5 text-justify ">
          <p className="title text-6xl font-black w-[90%] uppercase ">
            Your Ultimate Fitness Destination
          </p>

          <p className="content text-2xl w-[90%] leading-9 pt-2">
            At SwiftFit, we are passionate about helping
            individuals achieve their fitness goals by
            providing top-quality equipment and apparel
            designed to support active lifestyles. Founded
            by <b>Mohamed Laamyry </b>
            and <b>Abdesslam Mekouar</b>, two dedicated
            frontend developers with a shared vision of
            making fitness accessible to everyone, SwiftFit
            is committed to delivering exceptional products
            and an unparalleled shopping experience.
          </p>
        </div>
      </div>
      <div className="container mt-10 flex pb-2 ">
        <div className="flex flex-col justify-center text flex-1 pl-5 text-justify">
          <p className="title text-6xl font-black w-[90%] uppercase ">
            Our mission is simple
          </p>
          <p className="content text-2xl w-[90%] leading-9 pt-2">
            to inspire and empower individuals to lead
            healthier, more active lives. Whether you're a
            seasoned athlete or just starting your fitness
            journey, SwiftFit has everything you need to
            succeed. From high-performance workout gear to
            essential training equipment, we've curated a
            selection of products that combine
            functionality, style, and durability.
          </p>
        </div>
        <div className="flex-1 w-auto h-auto self-center relative">
          <img className="w-auto " src={mession} alt="" />
          <div className="bg-[#6ac43b] w-12 h-12 absolute -top-3 right-10" />
        </div>
      </div>
      <FOOTER />
    </>
  );
}
