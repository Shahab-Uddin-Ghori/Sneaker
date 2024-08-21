import React from "react";
import logo from "../img/logo.png";
function Logo() {
  return (
    <div
      className="logo"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "4rem" }} />
      <h2>Sneaker</h2>
    </div>
  );
}

export default Logo;
