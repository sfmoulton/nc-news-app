import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CommentCard from "./CommentCard";
import axios from "axios";

class ArticleCommentsPage extends Component {
  state = {
    articleComments: [],
    isLoading: true
  };

  getArticleComments = () => {
    const { article_id } = this.props;

    axios
      .get(
        `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(response => {
        this.setState({
          articleComments: response.data.comments,
          isLoading: false
        });
      });
  };

  componentDidMount = () => {
    this.getArticleComments();
  };

  render() {
    const { articleComments, isLoading } = this.state;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div>
        <CommentCard articleComments={articleComments} />
      </div>
    );
  }
}

export default ArticleCommentsPage;
