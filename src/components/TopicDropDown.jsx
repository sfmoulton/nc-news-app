import React from "react";

const TopicDropDown = ({ topicSlugs }) => {
  return topicSlugs.map(topic => {
    return (
      <option key={topic} value={topic}>
        {topic.toUpperCase()}
      </option>
    );
  });
};

export default TopicDropDown;
