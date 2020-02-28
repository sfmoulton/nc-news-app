import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles, addArticleVote }) => {
  return articles.map(article => {
    return (
      <ArticleCard
        article={article}
        addArticleVote={addArticleVote}
        key={article.article_id}
      />
    );
  });
};

export default ArticlesList;
