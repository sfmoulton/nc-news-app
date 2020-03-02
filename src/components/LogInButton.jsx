import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styles/LogInButton.module.css"

const LogInButton = () => {
  return <Link to="/log_in">
    <button className={styles.logInButton}>
      Change User
    </button>
  </Link>;
};

export default LogInButton;
