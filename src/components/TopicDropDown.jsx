import React from "react";
import styles from "../css-styles/TopicDropDown.module.css"

const TopicDropDown = ({ topicSlugs }) => {
  return topicSlugs.map(topic => {
    return (
      <option className={styles.dropDown} key={topic} value={topic}>
        {topic.toUpperCase()}
      </option>
    );
  });
};

export default TopicDropDown;
