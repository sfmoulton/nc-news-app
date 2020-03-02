import React from "react";
import { Link } from "@reach/router";

const PostArticleButton = () => {
  return (
    <Link to="/post_article">
      <button>Post New Article</button>
    </Link>
  );
};

export default PostArticleButton;
