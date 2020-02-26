import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CommentCard from "./CommentCard";
import AddArticleComment from "./AddArticleComment";
import styles from "../css-styles/ArticleCommentsPage.module.css";
import Axios from "axios";
import ErrorPage from "./ErrorPage";

class ArticleCommentsPage extends Component {
  state = {
    comments: [],
    isLoading: true,
    articleTitle: "",
    err: null
  };

  getArticleComments = () => {
    const { article_id } = this.props;

    Axios.get(
      `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`
    ).then(response => {
      this.setState({
        comments: response.data.comments,
        isLoading: false
      });
    }).catch(err => {
      this.setState({
        err: {
          msg: err.response.data.msg,
          status: err.response.status
        }
      });
    });
  };

  getArticleTitle = () => {
    const { article_id } = this.props;

    Axios.get(
      `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`
    ).then(response => {
      this.setState({
        articleTitle: response.data.article.title
      });
    });
  };

  componentDidMount() {
    this.getArticleComments();
    this.getArticleTitle();
  }

  postNewArticleComment = requestBody => {
    const { article_id } = this.props;

    return Axios.post(
      `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`,
      requestBody
    ).then(({ data }) => {
      return data.comment;
    });
  };

  addCommentToList = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };

  deleteComment = comment_id => {
    return Axios.delete(
      `https://steph-nc-news-app.herokuapp.com/api/comments/${comment_id}`
    );
  };

  removeCommentFromState = comment_id => {
    const { comments } = this.state;
    this.deleteComment(comment_id).then(() => {
      const filteredComments = comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      this.setState({ comments: filteredComments });
    });
  };

  render() {
    const { comments, isLoading, articleTitle, err } = this.state;
    const { article_id, username } = this.props;

    if (err) return <ErrorPage err={err} />;

    if (isLoading)
      return <LoadingIndicator LoadingIndicator={LoadingIndicator} />;

    return (
      <div>
        <h2>{articleTitle}</h2>
        <AddArticleComment
          article_id={article_id}
          postNewArticleComment={this.postNewArticleComment}
          username={username}
          addCommentToList={this.addCommentToList}
        />
        <div className={styles.commentsList}>
          <CommentCard
            comments={comments}
            username={username}
            deleteComment={this.deleteComment}
            removeCommentFromState={this.removeCommentFromState}
          />
        </div>
      </div>
    );
  }
}

export default ArticleCommentsPage;
