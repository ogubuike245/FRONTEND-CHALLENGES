import { useState } from "react";
import ModalEditionList from "./ModalEditionList";
import Thankyou from "./Thankyou";

const Modal = ({ dialogRef, closeDialog }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleCloseModal = () => {
    closeDialog();
  };
  const handleSubmit = () => {
    setFormSubmitted(true);
  };
  const handleFeedbackButton = () => {
    setFormSubmitted(false);
    closeDialog();
  };

  return (
    <dialog ref={dialogRef} className="dialog">
      {!formSubmitted ? (
        <>
          <div onClick={handleCloseModal} className="close-dialog-icon">
            <img src="/images/icon-close-modal.svg" alt="close modal icon" />
          </div>

          <div className="wrapper">
            <h1>Back this project</h1>

            <p>
              Want to support us in bringing the Mastercraft Bamboo Monitor
              Riser to the world?
            </p>

            <ModalEditionList handleSubmit={handleSubmit} />
          </div>
        </>
      ) : (
        <Thankyou
          dialogRef={dialogRef}
          handleCloseModal={handleFeedbackButton}
        />
      )}
    </dialog>
  );
};

export default Modal;
