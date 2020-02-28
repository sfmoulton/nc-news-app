import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styles/TopicButton.module.css";

const TopicButton = ({ topic }) => {
  return (
    <Link to={`/topics/${topic.slug}`} key={topic.slug}>
      <button className={styles.topicButton}>{topic.slug.toUpperCase()}</button>
    </Link>
  );
};

export default TopicButton;
