import React, { Component } from "react";
import styles from "../css-styles/HomePage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import ArticlesList from "./ArticlesList";
import ArticlesSortBy from "./ArticlesSortBy";
import Axios from "axios";


class HomePage extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  getArticles = sort_by => {
    Axios
      .get("https://steph-nc-news-app.herokuapp.com/api/articles", {
        params: {
          sort_by
        }
      })
      .then(response => {
        this.setState({ articles: response.data.articles, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div className={styles.articlesList}>
        <ArticlesSortBy getArticles={this.getArticles} />
        <ArticlesList
          articles={articles}
          addArticleVote={this.addArticleVote}
        />
      </div>
    );
  }
}

export default HomePage;
