import React from "react";
import Card from "./Card";

function CardCarousel() {
  return (
    <div className="carousel-container">
      <div className="card-wrapper">
        <Card />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default CardCarousel;
