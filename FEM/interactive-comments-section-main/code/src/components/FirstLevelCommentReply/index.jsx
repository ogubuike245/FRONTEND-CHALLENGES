import { useState } from "react";
import moment from "moment";
// HOOKS
import useVotesSystem from "../../hooks/useVotesSystem";
import useDeleteCommentSystem from "../../hooks/useDeleteCommentSystem";
import FirstLevelCommentReplyUpdateForm from "./UpdateForm";
import Modal from "../Modal/Modal";

const FirstLevelCommentReply = ({
  person,
  setPerson,
  comment,
  currentUser,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [replyScore, handleReplyUpVote, handleReplyDownVote] = useVotesSystem(
    comment.score,
    person,
    setPerson,
    comment
  );

  const [showModal, setShowModal] = useState(false); // State to control the modal

  const handleDeleteComment = useDeleteCommentSystem(person, setPerson);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleConfirmDelete = () => {
    handleDeleteComment(comment.id);
    handleModalToggle();
  };
  return (
    <>
      <article className="reply">
        {/* SCORE  */}
        <div className="score">
          <i className="fa-solid fa-plus" onClick={handleReplyUpVote}></i>
          <h4>{replyScore}</h4>
          <i className="fa-solid fa-minus" onClick={handleReplyDownVote}></i>
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
            <span onClick={handleModalToggle}>
              <i className="fa fa-trash"></i>Delete
            </span>

            <span onClick={handleEditClick}>
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

      {/* COMMENT EDIT FORM  */}
      {editMode && (
        <FirstLevelCommentReplyUpdateForm
          setEditMode={setEditMode}
          person={person}
          setPerson={setPerson}
          currentUser={currentUser}
          comment={comment}
        />
      )}

      {/* Modal */}
      {showModal && (
        <Modal
          handleModalToggle={handleModalToggle}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default FirstLevelCommentReply;
