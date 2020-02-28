import React, { Component } from "react";
import styles from "../css-styles/AddArticleComment.module.css";
import LoadingIndicator from "./LoadingIndicator";

class AddArticleComment extends Component {
  state = {
    body: "",
    isLoading: null
  };

  handleChange = (value, key) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { postNewArticleComment, username, addCommentToList } = this.props;
    const requestBody = { username, body };

    this.setState({ isLoading: true });

    postNewArticleComment(requestBody).then(newComment => {
      addCommentToList(newComment);
      this.setState({ body: "", isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className={styles.postContainer}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.textBoxLabel}>
              Comment:
              <input
                required
                type="text"
                onChange={event =>
                  this.handleChange(event.target.value, "body")
                }
                value={this.state.body}
                className={styles.commentInputBox}
              />
            </label>
          </div>

          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <div className={styles.buttonContainer}>
              <button className={styles.postButton}>Post</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default AddArticleComment;
