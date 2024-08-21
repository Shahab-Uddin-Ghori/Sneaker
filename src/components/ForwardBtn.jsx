import React from "react";

function ForwardBtn() {
  return (
    <button
      className="forwardBtn"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        fontSize: "1.5rem",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "rgb(243,102,58)",
        border: "none",
        outline: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <i className="bx bx-right-arrow-alt"></i>
    </button>
  );
}

export default ForwardBtn;
