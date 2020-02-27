import React, { Component } from "react";
import styles from "../css-styles/SingleArticlePage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import Axios from "axios";
import ArticleCommentsPage from "./ArticleCommentsPage";
import ErrorPage from "./ErrorPage";

class SingleArticlePage extends Component {
  state = {
    articleInfo: {},
    isLoading: true,
    err: null
  };

  getArticleInfo = () => {
    const { article_id } = this.props;

    Axios.get(
      `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`,
      {
        params: { article_id }
      }
    )
      .then(response => {
        this.setState({
          articleInfo: response.data.article,
          isLoading: false
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

  componentDidMount() {
    this.getArticleInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uri !== this.props.uri) {
      this.getArticleInfo();
    }
  }

  render() {
    const { title, body, author, article_id } = this.state.articleInfo;
    const { isLoading, err } = this.state;

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div className={styles.articleContainer}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <h3 className={styles.articleAuthor}><b>Published By: </b> {author}</h3>
        <div className={styles.bodyContainer}>
          <p className={styles.body}>{body}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link to={`/articles/${article_id}/comments`}>
            <button className={styles.commentButton}>View Comments</button>
          </Link>
        </div>
      </div>
    );
  }
}

// maybe look to add the comments in to here?

export default SingleArticlePage;
