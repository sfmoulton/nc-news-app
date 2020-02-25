import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  return articles.map(article => {
    return <div key={article.article_id}><ArticleCard article={article} /></div>;
  });
};

export default ArticlesList;
