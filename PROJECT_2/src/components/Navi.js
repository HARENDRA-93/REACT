import React from "react";
import "./Navi.css";
const Navi = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navi;
