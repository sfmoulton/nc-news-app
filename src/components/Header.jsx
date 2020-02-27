import React from 'react';
import styles from "../css-styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>NC News</h1>
      <h2 className={styles.h2}>Read. Post. Learn.</h2>
    </header>
  );
};

export default Header;