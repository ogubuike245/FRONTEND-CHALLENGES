import useCreateCommentSystem from "../../hooks/useCreateCommentSystem";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const FirstLevelCommentCreationForm = ({ person, setPerson }) => {
  const currentUser = useCurrentUser();
  const [newComment, setNewComment, handleCreateComment] =
    useCreateCommentSystem(person, setPerson);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const isFormValid = newComment.trim() !== ""; // Check if newComment is not empty

  return (
    <>
      <form className="form-input" onSubmit={handleCreateComment}>
        <div className="form-user-avatar">
          <img src={currentUser.image.png} alt="" />
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

        <button type="submit" className="form-button" disabled={!isFormValid}>
          SEND
        </button>
      </form>
    </>
  );
};

export default FirstLevelCommentCreationForm;
