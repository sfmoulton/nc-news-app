import React, { Component } from "react";
import Axios from "axios";
import ArticlesList from "./ArticlesList";
import styles from "../css-styles/SingleTopicPage.module.css";


class SingleTopicPage extends Component {
  state = {
    articles: []
  };
  getArticlesByTopic = () => {
    const { topic } = this.props;

    Axios
      .get("https://steph-nc-news-app.herokuapp.com/api/articles", {
        params: {
          topic
        }
      })
      .then(response => {
        this.setState({ articles: response.data.articles });
      });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticlesByTopic();
    }
  }

  componentDidMount() {
    this.getArticlesByTopic();
  }

  render() {
    const { articles } = this.state;

    return (
      <div className={styles.articlesList}>
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default SingleTopicPage;
