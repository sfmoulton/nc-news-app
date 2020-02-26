import React from "react";
import styles from "../css-styles/ArticleCard.module.css";
import { Link } from "@reach/router";
import AddVote from "./AddVote";

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
      <p>Comment count: {comment_count}</p>
      <div className={styles.buttonContainer}>
        <AddVote article_id={article_id} votes={votes} />
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
