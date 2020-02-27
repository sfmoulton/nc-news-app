import React from "react";
import styles from "../css-styles/UserDetailsHeader.module.css"
import Moment from "react-moment";

const UserDetailsHeader = ({ username }) => {

  const currentDate = new Date();
  console.log(currentDate);
  
  return (
    <div className={styles.userDetailsContainer}>
      <p className={styles.loggedInUser}>
        Welcome, {username}! <span role="img" label="star">{"⭐️"}</span>
      </p>
      <p className={styles.date}>
        <Moment format="D MMM YYYY" withTitle>
          {currentDate}
        </Moment>
      </p>
    </div>
  );
};

export default UserDetailsHeader;
