import React from "react";
import styles from "../css-styles/ArticleCard.module.css";
import { Link } from "@reach/router";
import AddVote from "./AddVote";
import Moment from "react-moment";
import RemoveUserArticles from "./RemoveUserArticles";

const ArticleCard = ({ article, username, removeArticleFromState }) => {
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
      <p className={styles.p1}>By {author}</p>
      <p className={styles.p2}>
        <b>Published: </b>
        <Moment fromNow>{created_at}</Moment>
      </p>
      <p className={styles.p2}>{comment_count} comments</p>
      <div className={styles.buttonContainer}>
        <Link to={`/articles/${article_id}/comments`}>
          <button className={styles.commentButton}>Comments</button>
        </Link>
        <Link to={`/articles/${article_id}`}>
          <button className={styles.readMeButton}>Read Me!</button>
        </Link>
      </div>
      <AddVote article_id={article_id} votes={votes} />
      {username === author && <RemoveUserArticles article_id={article_id}  removeArticleFromState={removeArticleFromState}/>}
    </div>
  );
};

export default ArticleCard;
