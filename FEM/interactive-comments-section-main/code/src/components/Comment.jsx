import React, { useState } from "react";
import moment from "moment";

import Reply from "./Reply";
import useVote from "../hooks/useVotes";
import ReplyForm from "./ReplyForm";

const Comment = ({ comment, person, setPerson, currentUser }) => {
  const [replyComment, setReplyComment] = useState(false);
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
            {currentUser.username === comment.user.username && <span>You</span>}
          </div>
          <div className="createdAt">
            <span>{comment.createdAt}</span>
          </div>
        </div>
        {/* ACTIONS  */}
        <div className="actions">
          <span onClick={() => setReplyComment(!replyComment)}>
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

      {replyComment && <ReplyForm currentUser={currentUser} />}

      {/* COMMENT REPLY / REPLIES  */}
      <div className={comment.replies.length > 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <Reply
                comment={reply}
                person={person}
                setPerson={setPerson}
                currentUser={currentUser}
                key={reply.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default Comment;
