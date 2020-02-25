import React from "react";
import styles from "../css-styles/CommentCard.module.css"

const CommentCard = ({ articleComments }) => {
  return articleComments.map(comment => {

    
    return (
     <div key={comment.comment_id} className={styles.commentContainer}>
        <h2>{comment.author} <span role="img" label="hand with pen">{'✍🏻'}</span></h2>
        <h3>Published at: {comment.created_at}</h3>
        <p>{comment.body}</p>
        <h4>Votes: {comment.votes}</h4>
     </div>
    );
  })
};

export default CommentCard;
