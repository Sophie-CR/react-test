import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-container">
      <a
        href="https://phenomenal-empanada-255bed.netlify.app/"
        target="_blank"
        rel="noreferrer"
        title="View my portfolio website"
      >
        <img
          src={require("./srlogo.png")}
          alt="Sophie Rosenberg logo"
          className="img-fluid sr-logo"
        />
      </a>
    </div>
  );
}
