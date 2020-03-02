import React, { Component } from "react";
import TopicDropDown from "./TopicDropDown";

class ArticleTopicsDropDown extends Component {
  state = {
    topic: ""
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    const { topics } = this.props;
    const topicSlugs = topics.map(topic => topic.slug);

    return (
      <label>
        Topic
        <select id="topic" onChange={this.handleChange}>
          <TopicDropDown topicSlugs={topicSlugs} />
        </select>
      </label>
    );
  }
}

export default ArticleTopicsDropDown;
