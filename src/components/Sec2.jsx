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
      <div
        className="text"
        style={{
          width: "100%",
          height: "30vh",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img
          className="sneakersLogo"
          src="https://static.vecteezy.com/system/resources/previews/010/994/412/non_2x/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
          alt="jordanLogos"
          style={{ width: "15%" }}
        />
        <img
          className="sneakersLogo"
          src="https://i.pinimg.com/originals/de/89/43/de8943c5be41c43b7db3ee63ff209d4a.jpg"
          alt="jordanLogos"
          style={{ width: "20%" }}
        />
        <img
          className="sneakersLogo"
          src="https://i.pinimg.com/736x/db/1b/39/db1b39becd09dd051858dfbf31b8f5bb.jpg"
          alt="jordanLogos"
          style={{ width: "18%" }}
        />
      </div>
    </div>
  );
}

export default Sec2;
