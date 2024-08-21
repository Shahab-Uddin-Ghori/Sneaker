import React from "react";

function BackBtn() {
  return (
    <button
      className="backBtn"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        fontSize: "1.5rem",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgb(243,102,58)",
        backgroundColor: "rgb(253,235,229)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border: "none",
        outline: "none",
      }}
    >
      <i className="bx bx-left-arrow-alt"></i>
    </button>
  );
}

export default BackBtn;
