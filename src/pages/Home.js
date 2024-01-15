import Banner from "../components/Banner/Banner";
import Card from "../components/Gallery/Gallery";
import image from "../assets/banner-img.png";

export default function Home() {
  return (
    <div>
      <Banner
        image={image}
        alt="Photo de récifs en bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  );
}
