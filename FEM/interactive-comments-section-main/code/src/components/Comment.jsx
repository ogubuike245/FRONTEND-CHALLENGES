import React from "react";
import Reply from "./Reply";

const Comment = ({ comment, person }) => {
  return (
    <>
      <article className="comment">
        <div className="score">
          <i className="fa-solid fa-plus"></i>
          <h4>{comment.score}</h4>
          <i className="fa-solid fa-minus"></i>
        </div>
        <div className="content">
          <div className="row-one">
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
            <div className="reply">
              <i className="fa fa-reply"></i>
              <span>Reply</span>
            </div>
          </div>
          <div className="row-two">
            <p>{comment.content}</p>
          </div>
        </div>
      </article>
      <div className={comment.replies.length != 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <div className="replies" key={index}>
                <Reply comment={reply} person={person} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Comment;
