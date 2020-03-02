import React, { Component } from "react";
import Axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import TopicDropDown from "./TopicDropDown";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";

class PostArticleForm extends Component {
  state = {
    isLoading: true,
    topics: [],
    topic: "",
    title: "",
    body: "",
    err: null,
    postSuccess: false
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const { username } = this.props;
    const requestBody = { title, topic, username, body };

    this.setState({ isLoading: true, postSuccess: false });
    Axios.post(
      "https://steph-nc-news-app.herokuapp.com/api/articles",
      requestBody
    )
      .then(response => {
        this.setState({
          isLoading: false,
          title: "",
          body: "",
          postSuccess: true
        });
      })
      .catch(err => {
        this.setState({ err });
      });
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
    const { isLoading, topics, err, postSuccess } = this.state;
    const topicSlugs = topics.map(topic => topic.slug);

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return !postSuccess ? (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Topic
          <select id="topic" onChange={this.handleChange}>
            <TopicDropDown topicSlugs={topicSlugs} />
          </select>
        </label>
        <label>
          Article
          <input
            type="text"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
          ></input>
        </label>
        <button>Post!</button>
      </form>
    ) : (
      <div>
        <p>Article posted!</p>
        <Link to="/">
          <button>Back to all articles</button>
        </Link>
      </div>
    );
  }
}

export default PostArticleForm;
