import React from "react";

function HeroText() {
  return (
    <div style={{ padding: ".5rem" }}>
      <div style={{ display: "flex", alignItems: "last baseline" }}>
        <h1 style={{ fontSize: "6rem" }}>Sh</h1>
        <div
          style={{
            width: "10rem",
            height: "3.4rem",
            borderRadius: "1.7rem",
            border: ".6rem solid rgb(243,102,58)",
            lineHeight: "2rem",
          }}
        ></div>
        <h1 style={{ fontSize: "6rem" }}>es</h1>
      </div>
      <h1 style={{ fontSize: "6rem" }}>Collect !</h1>
    </div>
  );
}

export default HeroText;
