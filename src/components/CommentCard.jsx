import React from "react";
import styles from "../css-styles/CommentCard.module.css";
import RemoveUserComments from "./RemoveUserComments";
import AddVote from "./AddVote";

const CommentCard = ({
  comments,
  username,
  deleteComment,
  removeCommentFromState
}) => {
  return comments.map(comment => {
    const { comment_id, author, created_at, body, votes } = comment;

    return (
      <div key={comment_id} className={styles.commentContainer}>
        <h2>
          {author}{" "}
          <span role="img" label="hand with pen">
            {"✍🏻"}
          </span>
        </h2>
        <h3>Published at: {created_at}</h3>
        <p>{body}</p>
        <AddVote comment_id={comment_id} votes={votes} />
        {username === author && (
          <RemoveUserComments
            comment_id={comment_id}
            deleteComment={deleteComment}
            removeCommentFromState={removeCommentFromState}
          />
        )}
      </div>
    );
  });
};

export default CommentCard;
