import useCreateComment from "../hooks/useCreateComment";

const Form = ({ person, setPerson, currentUser }) => {
  const [newComment, setNewComment, handleCreateComment] = useCreateComment(
    person,
    setPerson
  );

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

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

        <button type="submit" className="form-button">
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
