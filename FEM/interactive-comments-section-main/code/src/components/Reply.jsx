import React, { useState } from "react";
import useReplyVotes from "../hooks/useReplyVotes";
import ReplyForm from "./ReplyForm";

const Reply = ({ person, setPerson, comment, currentUser }) => {
  const [score, handleUpVote, handleDownVote] = useReplyVotes(
    comment.score,
    person,
    setPerson,
    comment
  );

  const createdAt = new Date(comment.createdAt).toLocaleString();

  return (
    <>
      <article className="reply">
        {/* SCORE  */}
        <div className="score">
          <i className="fa-solid fa-plus" onClick={handleUpVote}></i>
          <h4>{score}</h4>
          <i className="fa-solid fa-minus" onClick={handleDownVote}></i>
        </div>
        {/* USER INFO  */}
        <div className="user-info">
          <div className="avatar">
            <img src={comment.user?.image?.png} alt="" />
          </div>
          <div className="username">
            <h5>{comment.user.username}</h5>
            {currentUser.username === comment.user.username && <span>You</span>}
          </div>
          <div className="createdAt">
            <span>{comment.createdAt}</span>
          </div>
        </div>
        {/* ACTIONS  */}
        <div className="actions">
          <span>{/* <i className="fa fa-reply"></i>Reply */}</span>
        </div>
        {/* COMMENT DESCRIPTION */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>

      {/* <ReplyForm currentUser={currentUser} /> */}
    </>
  );
};

export default Reply;
