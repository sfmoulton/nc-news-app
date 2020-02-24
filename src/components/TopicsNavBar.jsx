import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import styles from "../css-styles/TopicsNavBar.module.css"

class TopicsNavBar extends Component {
  state = {
    topics: []
  };

  getAllTopics = () => {
    axios
      .get("https://steph-nc-news-app.herokuapp.com/api/topics")
      .then(response => {
        this.setState({ topics: response.data.topics });
      });
  };

  componentDidMount = () => {
    this.getAllTopics();
  };

  render() {
    const { topics } = this.state;

    return (
  
     topics.map(topic => {
      return (
        <Link to={`/topics/${topic.slug}`} key={topic.slug}>
          <button className={styles.topicButton}>{topic.slug.toUpperCase()}</button>
        </Link>
      );
   
    }));
  }
}

export default TopicsNavBar;
