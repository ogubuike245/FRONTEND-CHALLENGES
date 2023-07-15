import FirstLevelComment from "./FirstLevelComment";
import { useCurrentUser } from "../hooks/useCurrentUser";
const Comments = ({ person, setPerson }) => {
  const currentUser = useCurrentUser();
  return (
    <>
      {person.comments.map((comment) => {
        return (
          <FirstLevelComment
            key={comment.id}
            comment={comment}
            person={person}
            setPerson={setPerson}
            currentUser={currentUser}
          />
        );
      })}
    </>
  );
};

export default Comments;
