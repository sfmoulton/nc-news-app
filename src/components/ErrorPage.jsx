import React from "react";
import styles from "../css-styles/ErrorPage.module.css";

const ErrorPage = ({ err }) => {
  const { msg, status } = err;

  return (
    <div>
      <h2 className={styles.h2}>Oops!</h2>
      {status === 400 && <h3 className={styles.h3}>A bad request was sent.</h3>}
      {status === 404 && <h3 className={styles.h3}>Nothing to see here.</h3>}
      <p className={styles.p}>
        (Error Message: {msg}, Status Code: {status})
      </p>

      {/* {status === 400 && (
        <img src="smiley.gif" alt="Smiley face" height="42" width="42"></img>
      )}
      {status === 404 && (
        <img src="smiley.gif" alt="Smiley face" height="42" width="42"></img>
      )} */}
    </div>
  );
};

export default ErrorPage;

//need to add in images here
//add in logged in user name to top of page
