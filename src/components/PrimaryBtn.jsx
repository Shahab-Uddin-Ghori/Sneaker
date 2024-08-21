import React from "react";

function PrimaryBtn() {
  return (
    <button
      style={{
        width: "8rem",
        height: "3rem",
        color: "#FFF",
        border: "none",
        outline: "none",
        backgroundColor: "rgb(243,102,58)",
        borderRadius: "1.5rem",
        fontSize: ".9rem",
        fontWeight: "600",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      className="primaryBtn"
    >
      Shop Now
    </button>
  );
}

export default PrimaryBtn;
