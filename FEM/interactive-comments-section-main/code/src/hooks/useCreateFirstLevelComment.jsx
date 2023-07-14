import { useState } from "react";
import { v4 as generateRandomId } from "uuid";

const useCreateFirstLevelComment = (initialPerson, setPerson) => {
  const [newComment, setNewComment] = useState("");

  const handleCreateComment = (event) => {
    event.preventDefault();
    // Generate a new unique ID using uuid
    const newId = generateRandomId();

    // Create a new comment object
    const comment = {
      id: newId,
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

export default useCreateFirstLevelComment;
