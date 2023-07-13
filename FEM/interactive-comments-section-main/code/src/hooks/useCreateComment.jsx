import { useState } from "react";

const useCreateComment = (initialPerson, setPerson) => {
  const [newComment, setNewComment] = useState("");

  const handleCreateComment = (event) => {
    event.preventDefault();
    // Create a new comment object
    const comment = {
      id: initialPerson.comments.length + 1,
      content: newComment,
      createdAt: new Date().toLocaleString(),
      score: 0,
      user: {
        image: initialPerson.currentUser.image,
        username: initialPerson.currentUser.username,
      },
      replies: [],
    };

    // Create a new copy of the person object with the updated comments array
    const updatedPerson = {
      ...initialPerson,
      comments: [...initialPerson.comments, comment],
    };

    setPerson(updatedPerson);
    setNewComment("");
  };

  return [newComment, setNewComment, handleCreateComment];
};

export default useCreateComment;
