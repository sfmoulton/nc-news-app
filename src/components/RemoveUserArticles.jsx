import React from "react";
import styles from "../css-styles/RemoveUserArticles.module.css"

const RemoveUserArticles = ({ article_id, removeArticleFromState }) => {
  return (
    <div>
      <button
        className={styles.deleteArticleButton}
        value={article_id}
        onClick={() => removeArticleFromState(article_id)}
      >
        Delete my article
      </button>
    </div>
  );
};

export default RemoveUserArticles;
