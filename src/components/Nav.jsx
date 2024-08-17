import React from "react";
import Logo from "./Logo";
import "boxicons/css/boxicons.min.css";

function Nav() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        <Logo />
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2rem",
            color: "rgb(95, 95, 95)",
          }}
        >
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2rem",
            color: "rgb(95, 95, 95)",
            fontSize: "1.5rem",
          }}
        >
          <i className="bx bx-search"></i>
          <i className="bx bx-cart-add"></i>
          <i className="bx bx-user"></i>
        </div>
      </div>
      <hr className="thinner-gray-hr" />
    </>
  );
}

export default Nav;
