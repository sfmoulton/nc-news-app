import React from "react";
import { Link } from "@reach/router";
import { TiHomeOutline } from "react-icons/ti"
import styles from "../css-styles/HomeButton.module.css"


const HomeButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <Link to="/">
        <TiHomeOutline className={styles.homeButton}/>
      </Link>
    </div>
  );
};

export default HomeButton;
