import React, { Component } from "react";

class RemoveUserComments extends Component {
  // state = {
  //   comment_id: ""
  // }
  // handleClick = event => {
  //   const { deleteComment, removeCommentFromState } = this.props;
  //   const { value } = event.target;
  //   console.log(event.target.value);
    
  //   removeCommentFromState(value);
  //   // deleteComment(value);
    
  //   // deleteComment(value).then(response => {
  //   //   removeCommentFromState(value);
  //   // });
  // };

  render() {
    const { comment_id, removeCommentFromState } = this.props;

    return (
      <div>
        <button value={comment_id} onClick={() => removeCommentFromState(comment_id) }>
          Delete my comment
        </button>
      </div>
    );
  }
}

export default RemoveUserComments;
