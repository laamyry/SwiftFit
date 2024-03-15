import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import image from "../Assets/image.jpg";
import Hotsales from "../components/Hotsales";
export default function Home() {
  return (
    <>
      <Header />
      <Slider className="z-0" />
      <div className="container mt-10 flex pb-2">
        <div className="image flex-1 text-center object-cover	overflow-hidden rounded-r-3xl">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center text flex-1 pl-5 text-justify ">
          <p className="title text-6xl font-black w-[90%] uppercase ">
            Your Ultimate Fitness Destination
          </p>

          <p className="content text-2xl w-[90%] leading-9 pt-2">
            SwiftFit simplifies your fitness journey by
            offering a curated selection of top-quality
            materials, equipment, apparel, and nutrition
            products. Whether you're a seasoned athlete or a
            beginner, our platform provides everything you
            need to thrive. With a focus on quality and
            convenience, we ensure that each product meets
            your unique needs and goals. From innovative
            equipment to trusted nutrition supplements,
            SwiftFit is your one-stop destination for all
            things fitness. Join us today and experience the
            ease of reaching your fitness goals with
            SwiftFit.
          </p>
        </div>
      </div>
      <Hotsales />
      <Footer />
    </>
  );
}
