import React from "react";

const Modal = ({ handleModalToggle, handleConfirmDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Delete Comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="modal-actions">
          <button onClick={handleModalToggle}>
            <i className="fa fa-cancel"></i>Cancel
          </button>
          <button onClick={handleConfirmDelete}>
            <i className="fa fa-trash"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
