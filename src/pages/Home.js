import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import image from "../assets/Banner-img.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner
        image={image}
        alt="Photo de récifs en bord de mer"
        title="Chez vous, partout et ailleurs"
      />

      <Footer />
    </div>
  );
}
