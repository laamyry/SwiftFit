import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import image from "../Assets/image.jpg";
export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container mt-10 flex pb-2">
        <div className="image flex-1 text-center object-cover	overflow-hidden rounded-r-3xl">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center text flex-1 pl-5 text-justify ">
          <p className="title text-6xl font-black w-[90%] uppercase ">
            Lorem ipsum dolor sit amet
          </p>

          <p className="content text-2xl w-[90%] leading-9 pt-2">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam est facere aliquid
            mollitia quo quibusdam commodi accusamus id
            laudantium, consequatur quasi, molestiae,
            adipisci dolor illo omnis quisquam deserunt
            nesciunt alias! Consectetur reprehenderit
            perspiciatis qui magnam rem. Mollitia aspernatur
            libero aliquam laudantium unde necessitatibus
            dolores itaque dolorem laborum adipisci, cum
            praesentium fuga, nihil nam eligendi
            consequuntur hic error assumenda impedit
            tempore?.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
