
import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  return (
    <div>
     <ArticleCard articles={articles}/>
    </div>
  );
};

export default ArticlesList;
