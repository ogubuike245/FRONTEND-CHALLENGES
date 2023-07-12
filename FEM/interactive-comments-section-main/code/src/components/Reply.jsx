import React from "react";

const Reply = ({ comment }) => {
  return (
    <article className="comment">
      <div className="score">
        <i class="fa-solid fa-plus"></i>
        <h4>{comment.score}</h4>
        <i class="fa-solid fa-minus"></i>
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
  );
};

export default Reply;
