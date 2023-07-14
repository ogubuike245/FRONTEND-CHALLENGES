import { useState } from "react";
import useCreateFirstLevelCommentReply from "../hooks/useCreateFirstLevelCommentReply";

const FirstLevelCommentsReplyForm = ({
  currentUser,
  person,
  setPerson,
  comment,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleReplySubmit = useCreateFirstLevelCommentReply(
    person,
    setPerson,
    comment,
    currentUser
  );

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReplySubmit(newComment);
    setNewComment("");
  };

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
        placeholder="Reply comment..."
        className="input-box"
        value={newComment}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="form-button">
        REPLY
      </button>
    </form>
  );
};

export default FirstLevelCommentsReplyForm;
