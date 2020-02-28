import React, { Component } from "react";
import styles from "../css-styles/RemoveUserComments.module.css";

class RemoveUserComments extends Component {

  render() {
    const { comment_id, removeCommentFromState } = this.props;

    return (
      <div>
        <button
          className={styles.deleteCommentButton}
          value={comment_id}
          onClick={() => removeCommentFromState(comment_id)}
        >
          Delete my comment
        </button>
      </div>
    );
  }
}

export default RemoveUserComments;
