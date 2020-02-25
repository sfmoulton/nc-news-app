import React from "react";

const CommentCard = ({ articleComments }) => {
  return articleComments.map(comment => {

    
    return (
     <div key={comment.comment_id}>
        <h2>{comment.author} <span role="img" label="hand with pen">{'✍🏻'}</span></h2>
        <h3>{comment.created_at}</h3>
        <p>{comment.body}</p>
        <h4>Votes: {comment.votes}</h4>
     </div>
    );
  })
};

export default CommentCard;
