import React from "react";
import BackBtn from "./BackBtn";
import ForwardBtn from "./ForwardBtn";
import CollectionImg from "./ImgEffect";
import SecBtn from "./SecBtn";
import ImgEffect from "./ImgEffect";

function Sec4() {
  return (
    <div
      className="sec4"
      style={{
        width: "100%",
        height: "100vh",
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        className="sec4Left"
        style={{
          width: "40%",
          height: "80%",
          //   backgroundColor: "red",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          className="sec4LeftText"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>
            See Our New <br /> Collection
          </h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <BackBtn />
            <ForwardBtn />
          </div>
        </div>
        <ImgEffect imgUrl="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F04%2Fnike-air-jordan-1-retro-high-og-sneakers-black-red-white-satin-snake-release-date-1.jpg?cbr=1&q=90" />
      </div>
      <div
        className="sec4Right"
        style={{
          width: "40%",
          height: "80%",
          //   backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ImgEffect imgUrl="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?cs=srgb&dl=pexels-jddaniel-2385477.jpg&fm=jpg" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            color: "#778297",
          }}
        >
          <p>
            Discover our new collection! Experience fresh styles and designs ,
            perfect for updating your wardrobe with the latest trends.
          </p>
          <SecBtn />
        </div>
      </div>
    </div>
  );
}

export default Sec4;
