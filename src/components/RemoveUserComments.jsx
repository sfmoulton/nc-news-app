import React, { Component } from "react";

class RemoveUserComments extends Component {
  render() {
    const { comment_id, removeCommentFromState } = this.props;

    return (
      <div>
        <button
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
