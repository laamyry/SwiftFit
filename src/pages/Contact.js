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
      <div className="container flex my-20 gap-3">
        <div className="text-container self-center flex-1 p-5">
          <h1 className="text-5xl uppercase font-semibold mt-3">
            Contact us
          </h1>
          <p className="text-xl mt-3 ml-3">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis molestias ullam
            fuga illo perspiciatis neque, nisi quos
            veritatis sapiente ipsa.
          </p>
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
        <div className="form-container flex-1">
          <form
            className="flex form-contact flex-col gap-6 w-[80%] rounded-xl bg-[var(--third-color)] p-5 float-right"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl uppercase font-semibold mt-1">
              Send us a message
            </h1>
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
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
