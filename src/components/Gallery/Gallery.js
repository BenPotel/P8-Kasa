import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gallery.css"; // Import your CSS file for styling

export default function Card() {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/accomodation/:id");
  };
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
        <div
          key={item.id}
          className="gallery-item"
          onClick={() => handleClick(item.id)}
        >
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
