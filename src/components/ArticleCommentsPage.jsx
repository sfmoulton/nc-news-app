import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CommentCard from "./CommentCard";
import axios from "axios";
import AddArticleComment from "./AddArticleComment";
// import RemoveUserComments from "./RemoveUserComments";
// import LoggedInUserComments from "./LoggedInUserComments"

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

  postNewArticleComment = requestBody => {
    const { article_id } = this.props;

    return axios
      .post(
        `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`,
        requestBody
      )
      .then(({ data }) => {
        return data.comment;
      });
  };

  addCommentToList = newComment => {
    this.setState(currentState => {
      return { articleComments: [newComment, ...currentState.articleComments] };
    });
  };

  render() {
    const { articleComments, isLoading } = this.state;
    const { article_id, username } = this.props;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div>
        {/* <RemoveUserComments
          username={username}
          articleComments={articleComments}
        /> */}
        {/* <LoggedInUserComments
          username={username}
          articleComments={articleComments}
        /> */}
        <AddArticleComment
          article_id={article_id}
          postNewArticleComment={this.postNewArticleComment}
          username={username}
          addCommentToList={this.addCommentToList}
        />
        <div>
          <CommentCard articleComments={articleComments} username={username} />
        </div>
      </div>
    );
  }
}

export default ArticleCommentsPage;
