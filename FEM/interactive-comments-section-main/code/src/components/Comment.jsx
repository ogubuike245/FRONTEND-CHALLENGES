import React, { useState } from "react";
import moment from "moment";

import Reply from "./Reply";
import useVote from "../hooks/useVotes";

const Comment = ({ comment, person, setPerson }) => {
  const [score, handleUpVote, handleDownVote] = useVote(
    comment.score,
    person,
    setPerson,
    comment
  );

  return (
    <>
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
            <img src={comment.user?.image?.png} alt="" />
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
          <span>
            <i className="fa fa-reply"></i>Reply
          </span>
        </div>

        {/* COMMENT EDIT FORM  */}

        {/* COMMENT REPLY FORM   */}

        {/* COMMENT DESCRIPTION */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>
    </>
  );
};

export default Comment;
