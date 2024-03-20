import React from "react";
import HEADER from "../components/Header";
import FOOTER from "../components/Footer";
import image from "../Assets/image.jpg";

export default function About() {
  return (
    <>
      <HEADER />
      <div className="flex mt-6">
        <div className="flex-1 w-60">
          <img className="w-60" src={image} alt="" />
        </div>
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl id ex fermentum viverra. Morbi ac aliquet turpis. Aliquam erat volutpat. Mauris quis justo velit. Nulla facilisi. Sed sed ipsum a neque dapibus convallis. Aliquam ac ante ac felis iaculis tristique. Nam nec vulputate quam, nec condimentum nulla. Vestibulum vel orci ac tortor congue congue. Vestibulum ac neque lacus. Sed sit amet ante non lacus gravida scelerisque nec et odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Ut vehicula efficitur eros id gravida.
          </p>
          <p>
            Proin ac libero tincidunt, vestibulum sapien in, tempus odio. Vestibulum congue est non orci efficitur, et convallis ex ullamcorper. Donec fermentum pharetra risus, non tristique turpis convallis quis. Nulla facilisi. Phasellus id massa in dolor fermentum euismod. Nulla nec convallis mauris. Ut vel massa in leo ullamcorper scelerisque id nec tortor. Cras sed scelerisque mi, nec viverra dui.
          </p>
        </div>
      </div>
      <FOOTER />
    </>
  );
}
