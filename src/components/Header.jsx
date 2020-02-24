import React from 'react';
import styles from "../css-styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>NC News</h1>
    </header>
  );
};

export default Header;