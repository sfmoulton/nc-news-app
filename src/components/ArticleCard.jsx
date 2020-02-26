import React from "react";
import styles from "../css-styles/ArticleCard.module.css";
import { Link } from "@reach/router";

const ArticleCard = ({ article, addArticleVote }) => {
  const {
    article_id,
    title,
    author,
    created_at,
    votes,
    comment_count
  } = article;

  return (
    <div key={article_id} className={styles.articleContainer}>
      <h2 className={styles.articleTitle}>{title}</h2>
      <p>Published by: {author}</p>
      <p>Created at: {created_at}</p>
      {/* <button value={article_id} onClick={() => addArticleVote(article_id)}>
        Vote for me!
      </button> */}
      <p>Votes: {votes}</p>
      <p>Comment count: {comment_count}</p>
      <div className={styles.buttonContainer}>
        <Link to={`/articles/${article_id}/comments`}>
          <button className={styles.commentButton}>Comments</button>
        </Link>
        <Link to={`/articles/${article_id}`}>
          <button className={styles.readMeButton}>Read Me!</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
