import React from "react";

const Reply = ({ comment, person }) => {
  //   console.log(person);
  return (
    <article className="comment ">
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
              {person.currentUser.username === comment.user.username && (
                <span>you</span>
              )}
            </div>
            <div className="createdAt">
              <span>{comment.createdAt}</span>
            </div>
          </div>
          <div className="reply">
            {person.currentUser.username === comment.user.username ? (
              <>
                <span>
                  <i className="fa fa-edit"></i>Edit
                </span>

                <span className="delete-icon">
                  <i className="fa fa-trash"></i>Delete
                </span>
              </>
            ) : (
              <>
                <span>
                  <i className="fa fa-reply"></i>Reply
                </span>
              </>
            )}
          </div>
        </div>
        <div className="row-two">
          <p>
            <span className="replyingTo">@{comment.replyingTo}</span>
            &nbsp;
            {comment.content}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Reply;
