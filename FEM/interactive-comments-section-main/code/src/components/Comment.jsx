import React from "react";
import Reply from "./Reply";

const Comment = ({ comment, person }) => {
  return (
    <>
      <article className="comment">
        {/* SCORE  */}
        <div className="score">
          <i className="fa-solid fa-plus"></i>
          <h4>{comment.score}</h4>
          <i className="fa-solid fa-minus"></i>
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
            <span>{comment.createdAt}</span>
          </div>
        </div>

        {/* ACTIONS  */}
        <div className="actions">
          <span>
            <i className="fa fa-reply"></i>Reply
          </span>
        </div>

        {/*  COMMENT DESCRIPTION */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>

      <div className={comment.replies.length != 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return <Reply comment={reply} person={person} key={index} />;
          })}
      </div>
    </>
  );
};

export default Comment;
