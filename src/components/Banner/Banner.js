import "./banner.css";

export default function Banner({ image, alt, title }) {
  return (
    <section className="banner">
      <img src={image} alt={alt} />
      <div className="text_overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
