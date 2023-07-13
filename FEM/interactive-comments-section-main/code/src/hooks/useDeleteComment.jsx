import { useState, useEffect } from "react";

const useDeleteComment = (initialPerson, setPerson) => {
  const handleDeleteComment = (commentId) => {
    const updatedPerson = {
      ...initialPerson,
      comments: initialPerson.comments.filter(
        (comment) => comment.id !== commentId
      ),
    };
    setPerson(updatedPerson);
  };

  return handleDeleteComment;
};

export default useDeleteComment;
