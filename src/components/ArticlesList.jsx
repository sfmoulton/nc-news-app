import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles, addArticleVote, username, removeArticleFromState }) => {
  return articles.map(article => {
    return (
      <ArticleCard
        article={article}
        addArticleVote={addArticleVote}
        key={article.article_id}
        username={username}
        removeArticleFromState={removeArticleFromState}
      />
    );
  });
};

export default ArticlesList;
