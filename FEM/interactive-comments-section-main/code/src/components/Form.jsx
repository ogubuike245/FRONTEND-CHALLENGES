import React, { useState } from "react";

const Form = ({ person, onSubmit, setNewComment }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <>
      <form className="form-input" onSubmit={onSubmit}>
        <div className="form-user-avatar">
          <img src={person.currentUser.image.png} alt="" />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Add a comment..."
          className="input-box"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="form-button">
          SEND
        </button>
      </form>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h1>Comment Added</h1>

            <p>Your comment has been added successfully.</p>

            <div className="buttons">
              <button onClick={handleCloseDialog}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
