import React, { Component } from "react";
import Axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import TopicDropDown from "./TopicDropDown";

class PostArticleForm extends Component {
  state = {
    isLoading: true,
    topics: [],
    topic: ""
  };

  handleClick = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  getAllTopics = () => {
    Axios.get("https://steph-nc-news-app.herokuapp.com/api/topics").then(
      response => {
        this.setState({ isLoading: false, topics: response.data.topics });
      }
    );
  };

  componentDidMount() {
    this.getAllTopics();
  }

  render() {
    const { isLoading, topics } = this.state;
    const topicSlugs = topics.map(topic => topic.slug);

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text"></input>
          </label>
          <label>
            Topic
            <select id="topic" onClick={this.handleClick}>
              <TopicDropDown topicSlugs={topicSlugs} />
            </select>
          </label>
          <label>
            Article
            <input type="text"></input>
          </label>
          <button>Post!</button>
        </form>
      </div>
    );
  }
}

export default PostArticleForm;
