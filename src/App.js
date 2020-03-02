import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import SingleTopicPage from "./components/SingleTopicPage";
import TopicsNavBar from "./components/TopicsNavBar";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleCommentsPage from "./components/ArticleCommentsPage";
import styles from "./css-styles/App.module.css";
import ErrorPage from "./components/ErrorPage";
import HeaderBar from "./components/HeaderBar";
import LogInForm from "./components/LogInForm";
import PostArticleButton from "./components/PostArticleButton";
import PostArticleForm from "./components/PostArticleForm";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;

    return (
      <main>
        <HeaderBar username={username} />
        <div className={styles.navBarContainer}>
          <TopicsNavBar />
          <PostArticleButton />
        </div>
        <Router>
          <HomePage path="/" />
          <SingleTopicPage path="/topics/:topic" />
          <SingleArticlePage path="/articles/:article_id" />
          <ArticleCommentsPage
            path="/articles/:article_id/comments"
            username={username}
          />
          <LogInForm path="/log_in" />
          <PostArticleForm path="/post_article" username={username}/>
          <ErrorPage default />
        </Router>
      </main>
    );
  }
}

export default App;
