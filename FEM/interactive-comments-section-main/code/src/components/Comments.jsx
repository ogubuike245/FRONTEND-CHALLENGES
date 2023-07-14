import React from "react";
import Comment from "./Comment";

const Comments = ({ person, setPerson, currentUser }) => {
  return (
    <>
      {person.comments.map((comment) => {
        return (
          <Comment
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
