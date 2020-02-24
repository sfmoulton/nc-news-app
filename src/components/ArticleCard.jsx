import React from "react";
import styles from "../css-styles/ArticleCard.module.css";

const ArticleCard = ({ articles }) => {
  return articles.map(article => {
    return (
      <div key={article.article_id} className={styles.articleContainer}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>Published by: {article.author}</p>
        <p>Created at: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
        <p>Comment count: {article.comment_count}</p>
      </div>
    );
  });
};

export default ArticleCard;
