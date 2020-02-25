import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CommentCard from "./CommentCard";
import axios from "axios";
import AddArticleComment from "./AddArticleComment";

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
    const { article_id } = this.props;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div>
        <AddArticleComment article_id={article_id}/>
        <CommentCard articleComments={articleComments} />
      </div>
    );
  }
}

export default ArticleCommentsPage;
