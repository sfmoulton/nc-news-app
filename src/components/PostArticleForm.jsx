import React, { Component } from "react";
import Axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import TopicDropDown from "./TopicDropDown";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";
import styles from "../css-styles/PostArticleForm.module.css";

class PostArticleForm extends Component {
  state = {
    isLoading: true,
    topics: [],
    topic: "coding",
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
    const { title, topic, body } = this.state;
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
          postSuccess: true,
          err: null
        });
      })
      .catch(err => {
        this.setState({
          err: {
            msg: err.response.data.msg,
            status: err.response.status
          }
        });
      });
  };

  getAllTopics = () => {
    Axios.get("https://steph-nc-news-app.herokuapp.com/api/topics").then(
      response => {
        this.setState({
          isLoading: false,
          topics: response.data.topics,
          err: null
        });
      }
    );
  };

  componentDidMount() {
    this.getAllTopics();
  }

  render() {
    const { isLoading, topics, err, postSuccess } = this.state;
    const { username } = this.props;
    const topicSlugs = topics.map(topic => topic.slug);

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return !postSuccess ? (
      <div>
      <h2 className={styles.pageTitle}>Post New Article</h2>
      <form onSubmit={this.handleSubmit} className={styles.postContainer}>
        <label className={styles.title}>
          <div className={styles.titleLabel}>Title</div>
          <input
            className={styles.titleInputBox}
            required
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </label>
        <label className={styles.topic}>
          <div className={styles.topicLabel}>Topic</div>
          <select
            className={styles.dropDown}
            id="topic"
            onChange={this.handleChange}
          >
            <TopicDropDown topicSlugs={topicSlugs} />
          </select>
        </label>
        <label className={styles.article}>
          <div className={styles.articleLabel}>Article</div>
          <textarea
            className={styles.articleInputBox}
            required
            type="text"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button className={styles.postButton}>Post!</button>
      </form>
      </div>
    ) : (
      <div className={styles.postContainer}>
          <h2 className={styles.pageTitle}>New Article Posted</h2>
        <p className={styles.articlePostedMsg}>
          Thanks for posting, {username}!
        </p>
        <Link to="/">
          <button className={styles.postButton}>Back to all articles</button>
        </Link>
      </div>
    );
  }
}

export default PostArticleForm;
