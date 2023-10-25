import React from "react";
import styles from "./Navi.module.css";
const Navi = () => {
  return (
    <nav className={`${styles.navi} container`}>
      <div className="logo">
        <img src="images/logo.png" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navi;
