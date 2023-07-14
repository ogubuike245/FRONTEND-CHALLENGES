import { useState } from "react";
import { v4 as generateRandomId } from "uuid";

const useCreateReply = (initialPerson, setPerson, parentCommentId) => {
  const [newReply, setNewReply] = useState("");

  const handleCreateReply = (event) => {
    event.preventDefault();
    // Generate a new unique ID using uuid
    const newId = generateRandomId();

    // Find the parent comment in the person's comments array
    const parentCommentIndex = initialPerson.comments.findIndex(
      (comment) => comment.id === parentCommentId
    );

    if (parentCommentIndex !== -1) {
      // Create a new reply object
      const reply = {
        id: newId,
        content: newReply,
        createdAt: new Date().toLocaleString(),
        score: 0,
        replyingTo: initialPerson.comments[parentCommentIndex].user.username,
        user: {
          image: initialPerson.currentUser.image,
          username: initialPerson.currentUser.username,
        },
      };

      // Create a new copy of the person object with the updated reply added to the parent comment
      const updatedPerson = {
        ...initialPerson,
        comments: [
          ...initialPerson.comments.slice(0, parentCommentIndex),
          {
            ...initialPerson.comments[parentCommentIndex],
            replies: [
              ...initialPerson.comments[parentCommentIndex].replies,
              reply,
            ],
          },
          ...initialPerson.comments.slice(parentCommentIndex + 1),
        ],
      };

      setPerson(updatedPerson);
      setNewReply("");
    }
  };

  return [newReply, setNewReply, handleCreateReply];
};

export default useCreateReply;
