import React, { Component } from "react";
import styles from "../css-styles/HomePage.module.css";
import LoadingIndicator from "./LoadingIndicator";
import ArticlesList from "./ArticlesList";
import ArticlesSortBy from "./ArticlesSortBy";
import Axios from "axios";
import ErrorPage from "./ErrorPage";
import * as api from "../api";

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
        console.dir(err);
        this.setState({ err });
      });
  };

  deleteArticle = article_id => {
    return Axios.delete(
      `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`
    );
  };

  removeArticleFromState = article_id => {
    this.setState({ isLoading: true });
    const { articles } = this.state;
    this.deleteArticle(article_id).then(() => {
      const filteredArticles = articles.filter(article => {
        return article.article_id !== article_id;
      });
      this.setState({ articles: filteredArticles, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, isLoading, err } = this.state;
    const { username } = this.props;

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
            username={username}
            deleteArticle={this.deleteArticle}
            removeArticleFromState={this.removeArticleFromState}
          />
        </div>
      </>
    );
  }
}

export default HomePage;
