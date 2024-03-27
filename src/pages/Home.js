import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Hotsales from "../components/Hotsales";
import OFFERS from "../components/OffersEq";
import Productslider from "../components/Productslider";
export default function Home() {
  return (
    <>
      <Header />
      <Slider className="z-0" />

      <Hotsales />
      <OFFERS className=""/>
      <Productslider />
      <Footer />
    </>
  );
}
