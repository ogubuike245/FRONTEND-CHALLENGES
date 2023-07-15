import { useState } from "react";
import { v4 as generateRandomId } from "uuid";

const useCommentSystem = (initialPerson, setPerson) => {
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

  const handleReplySubmit = (comment, replyContent) => {
    const newId = generateRandomId();
    const newReply = {
      id: newId,
      content: replyContent,
      createdAt: new Date().toLocaleString(),
      score: 0,
      replyingTo: comment.user.username,
      user: initialPerson.currentUser,
    };

    // Map over the comments array to find the comment to be updated
    const updatedComments = initialPerson.comments.map((c) =>
      c.id === comment.id ? { ...c, replies: [...c.replies, newReply] } : c
    );

    // Create a new person object with the updated comments array
    const updatedPerson = {
      ...initialPerson,
      comments: updatedComments,
    };

    // Update the person state with the new reply
    setPerson(updatedPerson);
  };

  return [newComment, setNewComment, handleCreateComment, handleReplySubmit];
};

export default useCommentSystem;
