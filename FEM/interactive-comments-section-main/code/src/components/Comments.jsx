import React from "react";
import Comment from "./Comment";

const Comments = ({ person, setPerson }) => {
  return (
    <>
      {person.comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            comment={comment}
            person={person}
            setPerson={setPerson}
          />
        );
      })}
    </>
  );
};

export default Comments;
