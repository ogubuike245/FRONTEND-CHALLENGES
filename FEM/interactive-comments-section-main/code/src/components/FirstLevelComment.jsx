import React, { useState } from "react";
import moment from "moment";
import FirstLevelCommentReply from "./FirstLevelCommentReply";
import FirstLevelCommentReplyForm from "./FirstLevelCommentReplyForm";

// HOOKS
import useFirstLevelVotes from "../hooks/useFirstLevelVotes";
import useDeleteFirstLevelComment from "../hooks/useDeleteFirstLevelComment";

const Comment = ({ comment, person, setPerson, currentUser }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [score, handleUpVote, handleDownVote] = useFirstLevelVotes(
    comment.score,
    person,
    setPerson,
    comment
  );

  const handleDeleteComment = useDeleteFirstLevelComment(person, setPerson);

  const handleReplyClick = () => {
    setReplyComment(!replyComment);
  };

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
            <span>{moment(comment.createdAt).fromNow()}</span>
          </div>
        </div>
        {/* ACTIONS  */}
        <div className="actions">
          {currentUser.username === comment.user.username ? (
            <>
              <span onClick={() => handleDeleteComment(comment.id)}>
                <i className="fa fa-trash"></i>Delete
              </span>

              <span>
                <i className="fa fa-edit"></i>Edit
              </span>
            </>
          ) : (
            <span onClick={handleReplyClick}>
              <i className="fa fa-reply"></i>Reply
            </span>
          )}
        </div>
        {/* COMMENT DESCRIPTION */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>

      {/* COMMENT REPLY FORM   */}
      {replyComment && (
        <FirstLevelCommentReplyForm
          currentUser={currentUser}
          comment={comment}
          person={person}
          setPerson={setPerson}
        />
      )}
      {/* COMMENT EDIT FORM  */}
      {/* COMMENT REPLY / REPLIES  */}
      <div className={comment.replies.length > 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <FirstLevelCommentReply
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
