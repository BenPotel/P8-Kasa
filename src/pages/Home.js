import Banner from "../components/Banner/Banner";
import image from "../assets/Banner-img.png";

export default function Home() {
  return (
    <div>
      <Banner
        image={image}
        alt="Photo de récifs en bord de mer"
        title="Chez vous, partout et ailleurs"
      />
    </div>
  );
}
