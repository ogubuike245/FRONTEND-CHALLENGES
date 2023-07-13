import React from "react";
import Comment from "./Comment";

const Comments = ({ person, setPerson, handleDeleteComment }) => {
  return (
    <>
      {person?.comments?.map((comment, index) => {
        return (
          <Comment
            key={index}
            comment={comment}
            person={person}
            setPerson={setPerson}
            handleDeleteComment={handleDeleteComment}
          />
        );
      })}
    </>
  );
};

export default Comments;
