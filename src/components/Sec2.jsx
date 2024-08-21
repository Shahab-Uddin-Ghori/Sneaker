import React from "react";
import ForwardBtn from "./ForwardBtn";
import BackBtn from "./BackBtn";
import CardCarousel from "./CardCarousel";

function Sec2() {
  return (
    <div
      className="Sec2"
      style={{
        width: "100%",
        height: "100vh",
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div
        className="trendingProducts"
        style={{
          width: "90%",
          height: "10%",
          //   backgroundColor: "red",
          margin: "1rem 0 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Trending Products</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <BackBtn />
          <ForwardBtn />
        </div>
      </div>
      <CardCarousel />
    </div>
  );
}

export default Sec2;
