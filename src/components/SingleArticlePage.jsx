import React, { Component } from "react";
import axios from "axios";
import styles from "../css-styles/SingleArticlePage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";

class SingleArticlePage extends Component {
  state = {
    articleInfo: {},
    isLoading: true
  };

  getArticleInfo = () => {
    const { article_id } = this.props;

    axios
      .get(
        `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`,
        {
          params: { article_id }
        }
      )
      .then(response => {
        this.setState({ articleInfo: response.data.article, isLoading: false });
      });
  };

  componentDidMount = () => {
    this.getArticleInfo();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.uri !== this.props.uri) {
      this.getArticleInfo();
    }
  };

  render() {
    const { title, body, author, article_id } = this.state.articleInfo;
    const { isLoading } = this.state;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div className={styles.articleContainer}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <h3 className={styles.articleAuthor}>Published By: {author}</h3>
        <p>{body}</p>
        <Link to={`/articles/${article_id}/comments`}><button>Comments</button></Link>
      </div>
    );
  }
}

export default SingleArticlePage;
