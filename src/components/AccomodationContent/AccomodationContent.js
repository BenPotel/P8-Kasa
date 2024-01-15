import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";

export default function AccomodationContent() {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );

        if (response.status === 404) {
          console.log("Page not found. Redirecting to Page404");
          navigate("../../pages/Page404");
        } else {
          const data = await response.json();
          setCardData(data);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
        navigate("../../pages/Page404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (cardData === null) {
    // Return a loading state or placeholder while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Carousel images={cardData.pictures} />
      <Tags data={cardData.tags} />
    </div>
  );
}
