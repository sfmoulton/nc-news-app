import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles, addArticleVote }) => {
  return articles.map(article => {
    return (
      <div key={article.article_id}>
        <ArticleCard article={article} addArticleVote={addArticleVote} />
      </div>
    );
  });
};

export default ArticlesList;
