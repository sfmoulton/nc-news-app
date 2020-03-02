import React from "react";

const RemoveUserArticles = ({ article_id, removeArticleFromState }) => {
  return (
    <div>
      <button
        value={article_id}
        onClick={() => removeArticleFromState(article_id)}
      >
        Delete my article
      </button>
    </div>
  );
};

export default RemoveUserArticles;
