import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import styles from "../css-styles/SingleTopicPage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import ErrorPage from "./ErrorPage";
import * as api from "../api";

class SingleTopicPage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  getArticlesByTopic = () => {
    const { topic } = this.props;

    api
      .fetchArticlesByTopic(topic)
      .then(response => {
        this.setState({ articles: response.data.articles, isLoading: false });
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

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.setState({ isLoading: true, err: null });
      this.getArticlesByTopic();
    }
  }

  componentDidMount() {
    this.getArticlesByTopic();
  }

  render() {
    const { topic } = this.props;
    const { articles, isLoading, err } = this.state;

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div className={styles.topicName}>
        <h2>{topic.toUpperCase()}</h2>
        <div className={styles.articlesList}>
          <ArticlesList articles={articles} />
        </div>
      </div>
    );
  }
}

export default SingleTopicPage;
