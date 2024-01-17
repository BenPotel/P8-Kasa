import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import image from "../assets/banner-img.png";

export default function Home() {
  return (
    <div className="content">
      <Banner
        image={image}
        alt="Photo de récifs en bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  );
}
