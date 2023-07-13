import React, { useState } from "react";

const Form = ({ person }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDialogOpen(true);
    // Perform any other form submission logic here
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <form className="form-input" onSubmit={handleSubmit}>
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
        ></textarea>

        <button type="submit" className="form-button">
          SEND
        </button>
      </form>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h1>Delete comment</h1>

            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone
            </p>

            <div className="buttons">
              <button onClick={handleCloseDialog}>NO, CANCEL</button>
              <button onClick={handleCloseDialog}>YES, DELETE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
