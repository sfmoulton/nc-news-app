import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SingleTopicPage from "./components/SingleTopicPage";
import TopicsNavBar from "./components/TopicsNavBar";
import SingleArticlePage from "./components/SingleArticlePage";
import ArticleCommentsPage from "./components/ArticleCommentsPage";
import HomeButton from "./components/HomeButton";
import styles from "./css-styles/App.module.css";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <main>
        <HomeButton />
        <Header />
        <div className={styles.navBarContainer}>
          <TopicsNavBar />
        </div>
        <Router>
          <HomePage path="/" />
          <SingleTopicPage path="/topics/:topic" />
          <SingleArticlePage path="/articles/:article_id" />
          <ArticleCommentsPage
            path="/articles/:article_id/comments"
            username={username}
          />
          <ErrorPage default />
        </Router>
      </main>
    );
  }
}

export default App;
