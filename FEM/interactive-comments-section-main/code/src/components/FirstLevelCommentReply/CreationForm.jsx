import { useState } from "react";
import useCreateCommentSystem from "../../hooks/useCreateCommentSystem";

const FirstLevelCommentsReplyForm = ({
  currentUser,
  person,
  setPerson,
  comment,
  setReplyComment,
}) => {
  const [newComment, setNewComment] = useState("");
  const [, , , handleReplySubmit] = useCreateCommentSystem(person, setPerson);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReplySubmit(comment, newComment);
    setNewComment("");
    setReplyComment(false);
  };

  const isFormValid = newComment.trim() !== ""; // Check if newComment is not empty

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <div className="form-user-avatar">
        <img src={currentUser.image.png} alt="" />
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder={` @${person.currentUser.username}`}
        className="input-box"
        value={newComment}
        onChange={handleChange}
      >
        <span>TESTING</span>
      </textarea>

      <button type="submit" className="form-button" disabled={!isFormValid}>
        REPLY
      </button>
    </form>
  );
};

export default FirstLevelCommentsReplyForm;
