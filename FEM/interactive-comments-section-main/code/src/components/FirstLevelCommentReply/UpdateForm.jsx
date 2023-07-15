import { useState } from "react";
import useEditCommentSystem from "../../hooks/useEditCommentSystem";

const FirstLevelCommentUpdateForm = ({
  person,
  setPerson,
  currentUser,
  setEditMode,
  comment,
}) => {
  const [editedContent, setEditedContent, handleSaveEdit] =
    useEditCommentSystem(person, setPerson, comment);

  // EDIT FUNCTIONS
  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedContent(comment.content);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleSaveEdit(comment.id);
    setEditMode(false);
  };

  return (
    <>
      <form className="form-input" onSubmit={handleEditSubmit}>
        <div className="form-user-avatar">
          <img src={currentUser?.image?.png} alt="" />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Update comment..."
          className="input-box"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        ></textarea>

        <button onClick={handleCancelEdit}>
          <i className="fa fa-times"></i>
        </button>
        <button type="submit" className="form-button">
          UPDATE
        </button>
      </form>
    </>
  );
};

export default FirstLevelCommentUpdateForm;
