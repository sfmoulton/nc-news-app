import React from "react";
import HomeButton from "./HomeButton";
import Header from "./Header";
import UserDetailsHeader from "./UserDetailsHeader";
import styles from "../css-styles/HeaderBar.module.css";

const HeaderBar = props => {
  const { username } = props;
  return (
    <div className={styles.pageHeaderContainer}>
      <HomeButton />
      <Header />
      <UserDetailsHeader username={username} />
    </div>
  );
};

export default HeaderBar;
