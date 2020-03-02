import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styles/PostArticleButton.module.css"

const PostArticleButton = () => {
  return (
    <Link to="/post_article">
      <button className={styles.PostArticleButton}>Post New Article</button>
    </Link>
  );
};

export default PostArticleButton;
