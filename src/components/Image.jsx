import React from "react";
import image from "../img/sImg1.png";

function Image() {
  return (
    <div
      className="ShoeImageContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "25rem",
        height: "22rem",
        backgroundColor: "red",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        objectFit: "cover",
        objectPosition: "center",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        className="ShoeImage"
        src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/I/68097_1668607420.jpg"
        alt="Sneaker"
        style={{
          width: "100%",
          borderRadius: "16px",
          transition: "ease .5s",
        }}
      />
    </div>
  );
}

export default Image;
