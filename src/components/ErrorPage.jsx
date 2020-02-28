import React from "react";
import styles from "../css-styles/ErrorPage.module.css";

const ErrorPage = ({ err }) => {
  if (err === undefined) {
    return (
      <div>
        <h2 className={styles.h2}>Oops!</h2>
        <h3 className={styles.h3}>A bad request was sent.</h3>
        <p className={styles.p}>Error Message: Invalid URL, Status Code: 404</p>
        )}
      </div>
    );
  }

  const { msg, status } = err;
  return (
    <div>
      <h2 className={styles.h2}>Oops!</h2>
      {status === 400 && <h3 className={styles.h3}>A bad request was sent.</h3>}
      {status === 404 && <h3 className={styles.h3}>Nothing to see here.</h3>}
      <p className={styles.p}>
        (Error Message: {msg}, Status Code: {status})
      </p>
    </div>
  );
};

export default ErrorPage;
