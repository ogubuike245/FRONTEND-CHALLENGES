import React, { useState } from "react";
import moment from "moment";
import FirstLevelCommentReply from "../FirstLevelCommentReply";
import FirstLevelCommentReplyForm from "../FirstLevelCommentReply/CreationForm";

// HOOKS
import useVotesSystem from "../../hooks/useVotesSystem";
import useDeleteCommentSystem from "../../hooks/useDeleteCommentSystem";
import FirstLevelCommentUpdateForm from "./UpdateForm";
import Modal from "../Modal/Modal";

const Comment = ({ comment, person, setPerson, currentUser }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal

  // Hook to handle upvote and downvote functionality
  const [commentScore, handleCommentUpVote, handleCommentDownVote] =
    useVotesSystem(comment.score, person, setPerson, comment);

  // Hook to handle delete comment functionality
  const handleDeleteComment = useDeleteCommentSystem(person, setPerson);

  // Toggle reply comment form visibility
  const handleReplyClick = () => {
    setReplyComment(!replyComment);
  };

  // Toggle edit comment form visibility
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  // Toggle modal visibility
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  // Function to handle confirmed delete action
  const handleConfirmDelete = () => {
    handleDeleteComment(comment.id);
    handleModalToggle();
  };

  return (
    <>
      <article className="comment">
        {/* SCORE  */}
        {/* Display the comment score and upvote/downvote icons */}
        <div className="score">
          <i className="fa-solid fa-plus" onClick={handleCommentUpVote}></i>
          <h4>{commentScore}</h4>
          <i className="fa-solid fa-minus" onClick={handleCommentDownVote}></i>
        </div>
        {/* USER INFO  */}
        {/* Display the user's avatar, username, and creation date */}
        <div className="user-info">
          <div className="avatar">
            <img src={comment.user?.image?.png} alt="" />
          </div>
          <div className="username">
            <h5>{comment.user.username}</h5>
            {/* Display "You" if the current user is the owner of the comment */}
            {currentUser.username === comment.user.username && <span>You</span>}
          </div>
          <div className="createdAt">
            <span>{moment(comment.createdAt).fromNow()}</span>
          </div>
        </div>
        {/* ACTIONS  */}
        {/* Display actions based on whether the current user owns the comment or not */}
        <div className="actions">
          {currentUser.username === comment.user.username ? (
            <>
              {/* If the current user owns the comment, show delete and edit options */}
              <span onClick={handleModalToggle}>
                <i className="fa fa-trash"></i>Delete
              </span>
              <span onClick={handleEditClick}>
                <i className="fa fa-edit"></i>Edit
              </span>
            </>
          ) : (
            <span onClick={handleReplyClick}>
              {/* If the current user does not own the comment, show the reply option */}
              <i className="fa fa-reply"></i>Reply
            </span>
          )}
        </div>
        {/* COMMENT DESCRIPTION */}
        {/* Display the content of the comment */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>

      {/* COMMENT REPLY FORM */}
      {/* Show the reply comment form if the user clicks on the reply option */}
      {replyComment && (
        <FirstLevelCommentReplyForm
          currentUser={currentUser}
          comment={comment}
          person={person}
          setPerson={setPerson}
          setReplyComment={setReplyComment}
        />
      )}
      {/* COMMENT EDIT FORM */}
      {/* Show the edit comment form if the user clicks on the edit option */}
      {editMode && (
        <FirstLevelCommentUpdateForm
          setEditMode={setEditMode}
          person={person}
          setPerson={setPerson}
          currentUser={currentUser}
          comment={comment}
        />
      )}
      {/* COMMENT REPLY / REPLIES */}
      {/* Show the replies for the comment if there are any */}
      <div className={comment.replies.length > 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply) => {
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

      {/* Modal */}
      {/* Show the modal if the user clicks on the delete option */}
      {showModal && (
        <Modal
          handleModalToggle={handleModalToggle}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default Comment;
