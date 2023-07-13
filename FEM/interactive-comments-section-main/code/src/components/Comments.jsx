import React from "react";
import Comment from "./Comment";

const Comments = ({ person }) => {
  return (
    <>
      {person.comments.map((comment, index) => {
        return <Comment key={index} comment={comment} person={person} />;
      })}
    </>
  );
};

export default Comments;
