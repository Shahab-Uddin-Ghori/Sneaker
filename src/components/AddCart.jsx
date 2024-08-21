import React from "react";

function AddCart() {
  return (
    <div
      className="addCart"
      style={{
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5532F",
        color: "#FFF",
      }}
    >
      <i className="bx bx-cart-add"></i>
    </div>
  );
}

export default AddCart;
