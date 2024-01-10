import "./banner.css";

export default function Banner(props) {
  return (
    <section className="banner">
      <img src={props.image} alt={props.alt} />
      <div className="text_overlay">
        <h1>{props.title}</h1>
      </div>
    </section>
  );
}
