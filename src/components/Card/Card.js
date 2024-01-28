import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch gallery data/properties from the API to create the cards
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setGallery(data))
      .catch((error) => console.error("Error fetching the gallery:", error));
  }, []);

  return (
    <div className="gallery-container">
      {gallery.map((item) => (
        <Link
          className="gallery-item"
          key={item.id}
          to={`./accomodation/${item.id}`}
        >
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
