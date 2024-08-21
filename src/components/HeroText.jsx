import React from "react";

function HeroText() {
  return (
    <div className="heroText" style={{ padding: ".5rem" }}>
      <div style={{ display: "flex", alignItems: "last baseline" }}>
        <h1 style={{ fontSize: "9rem" }}>Sh</h1>
        <div
          style={{
            width: "15rem",
            height: "4.7rem",
            borderRadius: "2.5rem",
            border: ".6rem solid rgb(243,102,58)",
            lineHeight: "2rem",
          }}
        ></div>
        <h1 style={{ fontSize: "9rem" }}>es</h1>
      </div>
      <h1 style={{ fontSize: "9rem" }}>Collect !</h1>
    </div>
  );
}

export default HeroText;
