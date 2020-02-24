import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SingleTopicPage from "./components/SingleTopicPage";
import TopicsNavBar from "./components/TopicsNavBar";
import styles from "./css-styles/App.module.css";
import SingleArticlePage from "./components/SingleArticlePage";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.navBarContainer}>
        <TopicsNavBar />
      </div>
      <Router>
        <HomePage path="/" />
        <SingleTopicPage path="/topics/:topic" />
        <SingleArticlePage path="/articles/:article_id" />
      </Router>
    </main>
  );
}

export default App;
