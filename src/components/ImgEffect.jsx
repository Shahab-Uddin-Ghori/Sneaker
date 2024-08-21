import React from "react";

function ImgEffect({ imgUrl }) {
  return (
    <div
      className="collectionImgContainer"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        objectFit: "cover",
      }}
    >
      <img
        className="collectionImg"
        src={imgUrl}
        alt=""
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
      />
    </div>
  );
}

export default ImgEffect;
