import React, { useState } from "react";

const Form = ({ onSubmit, setNewComment, newComment, currentUser }) => {
  const currentUserImage = currentUser.image.png;

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <>
      <form className="form-input" onSubmit={onSubmit}>
        <div className="form-user-avatar">
          <img src={currentUserImage} alt="" />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Add a comment..."
          className="input-box"
          value={newComment}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="form-button">
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
