import React from "react";
import FirstLevelComment from "./FirstLevelComment";

const Comments = ({ person, setPerson, currentUser }) => {
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
