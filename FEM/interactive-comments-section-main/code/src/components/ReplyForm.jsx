import { useState } from "react";

const ReplyForm = ({ currentUser }) => {
  const [newComment, setNewComment] = useState("");
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <>
      <form className="form-input">
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
    </>
  );
};

export default ReplyForm;
