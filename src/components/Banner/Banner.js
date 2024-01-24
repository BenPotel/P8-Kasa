import "./banner.css";

export default function Banner({ image, alt, title }) {
  return (
    <section className="banner" data-testid="banner-component">
      <img src={image} alt={alt} />
      <div className="text_overlay" data-testid="text-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
