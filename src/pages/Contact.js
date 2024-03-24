import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add logic to process the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="container flex my-20 gap-4 relative">
        <div className="form-container flex-1">
          <div className="shape bg-[#abe03b] w-12 h-8 absolute top-[50%] -left-0"/>

          <form
            className="flex mt-6 form-contact float-right flex-col gap-3 w-[80%] rounded-xl bg-[var(--third-color)] p-5 "
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl uppercase font-semibold mt-1">
              Send us a message
            </h1>
            <p>
              Feel free to contact us anytime. We'll get
              back to you as soon as we can.
            </p>
            <label className="border-none">
              {/* <h3>Name:</h3> */}
              <input
                className="w-full p-1 bg-[var(--third-color)] border-b-2 border-[var(--second-color)]"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>
            <label>
              {/* <h3>Email:</h3> */}

              <input
                className="w-full p-1 bg-[var(--third-color)] border-b-2 border-[var(--second-color)]"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </label>
            <label>
              {/* <h3> Message:</h3> */}

              <textarea
                className="w-full p-1 bg-[var(--third-color)] border-b-2 border-[var(--second-color)]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              />
            </label>
            <button
              className="bg-[var(--second-color)] flex justify-center self-center rounded-md p-2 w-[100%] text-center"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>

        <div className="text-container self-center flex-1 bg-[var(--primary-color)] p-3 text-white h-96 z-20 relative">
          <h1 className="text-5xl uppercase font-semibold mt-3">
            Contact us
          </h1>
          <p className="text-xl mt-3 ml-3">
            Get started on your fitness journey today! Reach
            out to us for personalized support and expert
            guidance. Let's achieve your goals together –
            contact us now!
          </p>
          <div className="ul-container absolute bottom-5">
            <ul className="flex flex-wrap gap-5 mt-4 text-xl ml-3">
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
          </div>
          <div className="bg-[#abe03b] w-8 h-8 absolute -top-3 -left-2"></div>
        </div>
        <div className="bg-container bg-[#abe03b] w-40 h-[30rem] -top-12 right-0 absolute"></div>
      </div>
      <Footer />
    </>
  );
}
