import React from "react";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import PrimaryBtn from "./components/PrimaryBtn";
import heroImg from "./img/heroimg.png";
import ForwardBtn from "./components/ForwardBtn";
import BackBtn from "./components/BackBtn";

function HeroSec() {
  return (
    <div className="heroSec" style={{ width: "100%" }}>
      <Nav />
      <div
        className="hero"
        style={{
          width: "100%",
          height: "90vh",
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          className="HeroPara"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            // backgroundColor: "yellow",
          }}
        >
          <HeroText />
          <div
            className="textBtn"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <h3
              style={{
                width: "20rem",
                fontSize: "1rem",
                color: "#5F5F5F",
                fontWeight: "200",
              }}
            >
              Discover our stylish and comfortable shoes, perfect for every
              ocassion and need
            </h3>
            <PrimaryBtn />
          </div>
        </div>
        <div
          className="model3d"
          style={{
            width: "50%",
            height: "80vh",
            // backgroundColor: "yellow",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="forBtn"
            style={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <ForwardBtn />
          </div>
          <div
            className="backBtn"
            style={{ position: "absolute", top: "1rem", right: "4rem" }}
          >
            <BackBtn />
          </div>
          <img
            className="heroImg"
            src={heroImg}
            alt=""
            style={{ width: "83%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
