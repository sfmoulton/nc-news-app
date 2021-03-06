import React, { Component } from "react";
import Axios from "axios";
import TopicButton from "./TopicButton";

class TopicsNavBar extends Component {
  state = {
    topics: []
  };

  getAllTopics = () => {
    Axios.get("https://steph-nc-news-app.herokuapp.com/api/topics").then(
      response => {
        this.setState({ topics: response.data.topics });
      }
    );
  };

  componentDidMount() {
    this.getAllTopics();
  }

  render() {
    const { topics } = this.state;

    return topics.map(topic => {
      return (
        <div key={topic.slug}>
          <TopicButton topic={topic} />
        </div>
      );
    });
  }
}

export default TopicsNavBar;
