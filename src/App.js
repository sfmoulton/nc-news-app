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

        <TopicsNavBar />
        <Router>
          <HomePage path="/" />
          <SingleTopicPage path="/topics/:topic" />
          <SingleArticlePage path="/articles/:article_id" />
          <ArticleCommentsPage
            path="/articles/:article_id/comments"
            username={username}
          />
        </Router>
      </main>
    );
  }
}

export default App;
