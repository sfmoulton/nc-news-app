import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CommentCard from "./CommentCard";
import AddArticleComment from "./AddArticleComment";
import styles from "../css-styles/ArticleCommentsPage.module.css";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";
import * as api from "../api";

class ArticleCommentsPage extends Component {
  state = {
    comments: [],
    isLoading: true,
    articleTitle: "",
    err: null
  };

  getArticleComments = () => {
    const { article_id } = this.props;
    api
      .fetchArticleComments(article_id)
      .then(response => {
        this.setState({
          comments: response.data.comments,
          isLoading: false
        });
      })
      .catch(err => {
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

    api
      .fetchArticleTitle(article_id)
      .then(response => {
        this.setState({
          articleTitle: response.data.article.title
        });
      })
      .catch(err => {
        this.setState({
          err: {
            msg: err.response.data.msg,
            status: err.response.status
          }
        });
      });
  };

  componentDidMount() {
    this.getArticleComments();
    this.getArticleTitle();
  }

  addCommentToList = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };

  removeCommentFromState = comment_id => {
    this.setState({ isLoading: true });
    const { comments } = this.state;
    return api
      .removeComment(comment_id)
      .then(() => {
        const filteredComments = comments.filter(comment => {
          return comment.comment_id !== comment_id;
        });
        this.setState({ comments: filteredComments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            msg: err.response.data.msg,
            status: err.response.status
          }
        });
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
        <h2 className={styles.h2}>{articleTitle}</h2>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonSurround}>
            <Link to={`/articles/${article_id}`}>
              <button className={styles.articleButton}>Go to article</button>
            </Link>
          </div>
          <AddArticleComment
            article_id={article_id}
            postNewArticleComment={this.postNewArticleComment}
            username={username}
            addCommentToList={this.addCommentToList}
          />
        </div>
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
