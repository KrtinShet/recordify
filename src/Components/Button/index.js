import React from "react";
import "./index.css";

function index({ children, ...props }) {
  return (
    <button {...props} className="btnn btnn-gradient btnn-glow bg-blur">
      {children}
    </button>
  );
}

export default index;
