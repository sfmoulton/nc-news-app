import React, { Component } from "react";
import styles from "../css-styles/HomePage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import ArticlesList from "./ArticlesList";
import ArticlesSortBy from "./ArticlesSortBy";
import Axios from "axios";
import ErrorPage from "./ErrorPage";

class HomePage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  getArticles = sort_by => {
    Axios.get("https://steph-nc-news-app.herokuapp.com/api/articles", {
      params: {
        sort_by
      }
    })
      .then(response => {
        this.setState({ articles: response.data.articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, isLoading, err } = this.state;

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <>
        <ArticlesSortBy getArticles={this.getArticles} />
        <div className={styles.articlesList}>
          <ArticlesList
            articles={articles}
            addArticleVote={this.addArticleVote}
          />
        </div>
      </>
    );
  }
}

export default HomePage;
