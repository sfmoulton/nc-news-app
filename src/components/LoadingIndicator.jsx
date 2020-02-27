import React from "react";
import Loader from "react-loader-spinner";
import styles from "../css-styles/LoadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.loadingIndicator}>
      <Loader
        color="#DB504A"
        className="loader"
        type="Oval"
        height={100}
        width={100}
      />
    </div>
  );
};

export default LoadingIndicator;
