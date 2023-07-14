import { useState } from "react";
import moment from "moment";
// HOOKS
import useFirstLevelReplyVotes from "../hooks/useFirstLevelReplyVotes";
import useDeleteFirstLevelComment from "../hooks/useDeleteFirstLevelComment";

const FirstLevelCommentReply = ({
  person,
  setPerson,
  comment,
  currentUser,
}) => {
  const [score, handleUpVote, handleDownVote] = useFirstLevelReplyVotes(
    comment.score,
    person,
    setPerson,
    comment
  );

  const handleDeleteComment = useDeleteFirstLevelComment(person, setPerson);

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
            <span>{moment(comment.createdAt).fromNow()}</span>
          </div>
        </div>
        {/* ACTIONS  */}
        {currentUser.username === comment.user.username && (
          <div className="actions">
            <span onClick={() => handleDeleteComment(comment.id)}>
              <i className="fa fa-trash"></i>Delete
            </span>

            <span>
              <i className="fa fa-edit"></i>Edit
            </span>
          </div>
        )}

        {/* COMMENT DESCRIPTION */}
        <div className="description">
          <p>
            <span>@{comment.replyingTo}</span>
            {comment.content}
          </p>
        </div>
      </article>
    </>
  );
};

export default FirstLevelCommentReply;
