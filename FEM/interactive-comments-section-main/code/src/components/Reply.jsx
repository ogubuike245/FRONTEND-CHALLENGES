import React, { useState } from "react";
import moment from "moment";

const Reply = ({ comment, person, handleDeleteComment }) => {
  const [score, setScore] = useState(comment.score);

  const handleUpVote = () => {
    setScore(score + 1);
  };

  const handleDownVote = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };
  return (
    <article className="comment">
      {/* SCORE  */}
      <div className="score">
        <i className="fa-solid fa-plus" onClick={handleUpVote}></i>
        <h4>{score}</h4>
        <i className="fa-solid fa-minus" onClick={handleDownVote}></i>
      </div>

      {/* USER INFO  */}
      <div className="user-info">
        <div className="avatar">
          <img src={comment.user.image.png} alt="" />
        </div>
        <div className="username">
          <h5>{comment.user.username}</h5>
        </div>
        <div className="createdAt">
          <span>{moment(comment.createdAt).fromNow()}</span>
        </div>
      </div>

      {/* ACTIONS  */}
      <div className="actions">
        {person.currentUser.username === comment.user.username ? (
          <div>
            <span
              className="delete-icon"
              onClick={() => handleDeleteComment(comment.id)}
            >
              <i className="fa fa-trash"></i>Delete
            </span>
            <span>
              <i className="fa fa-edit"></i>Edit
            </span>
          </div>
        ) : (
          <div>
            <span>
              <i className="fa fa-reply"></i>Reply
            </span>
          </div>
        )}
      </div>

      {/*  COMMENT DESCRIPTION */}
      <div className="description">
        <p>
          <span className="replyingTo">@{comment.replyingTo}</span>
          &nbsp; {comment.content}
        </p>
      </div>
    </article>
  );
};

export default Reply;
