import React from "react";
import styles from "../css-styles/ErrorPage.module.css";

const ErrorPage = ({ err, defaultErr }) => {
  // const { defaultMsg, defaultStatus } = defaultErr;

  if (defaultErr === undefined) {
    const { msg, status } = err;
    return (
      <div>
        <h2 className={styles.h2}>Oops!</h2>
        {status === 400 && (
          <h3 className={styles.h3}>A bad request was sent.</h3>
        )}
        {status === 404 && <h3 className={styles.h3}>Nothing to see here.</h3>}
        <p className={styles.p}>
          (Error Message: {msg}, Status Code: {status})
        </p>

        {/* {status === 400 && (
          <img
            src=""
            alt="crying face"
            height="20vh"
            width="20vh"
          ></img>
        )}
        {status === 404 && (
          <img src="smiley.gif" alt="Smiley face" height="42" width="42"></img>
        )} */}
      </div>
    );
  }

  if (err === undefined) {
    const { defaultMsg, defaultStatus } = defaultErr;
    return (
      <div>
        <h2 className={styles.h2}>Oops!</h2>
        <h3 className={styles.h3}>A bad request was sent.</h3>
        <p className={styles.p}>
          (Error Message: {defaultMsg}, Status Code: {defaultStatus})
        </p>
        {/* <img
          src=""
          alt="confused emoji face"
          className={styles.badRequestPic}
        ></img> */}
        )}
      </div>
    );
  }

  // maybe if the error then we set the default?
};

export default ErrorPage;

//need to add in images here
//add in logged in user name to top of page
