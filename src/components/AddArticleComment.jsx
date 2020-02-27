import React, { Component } from "react";
import styles from "../css-styles/AddArticleComment.module.css";

class AddArticleComment extends Component {
  state = {
    body: ""
  };

  handleChange = (value, key) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { postNewArticleComment, username, addCommentToList } = this.props;
    const requestBody = { username, body };

    postNewArticleComment(requestBody).then(newComment => {
      addCommentToList(newComment);
      this.setState({ body: "" });
    });
  };

  componentDidUpdate(prevState) {}

  render() {
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
          <div className={styles.buttonContainer}>
            <button className={styles.postButton}>Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddArticleComment;
