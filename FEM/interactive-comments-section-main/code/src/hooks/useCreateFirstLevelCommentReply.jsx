import { useState } from "react";
import { v4 as generateRandomId } from "uuid";

const useCreateFirstLevelCommentReply = (
  person,
  setPerson,
  comment,
  currentUser
) => {
  const handleReplySubmit = (replyContent) => {
    const newId = generateRandomId();
    const newReply = {
      id: newId, // Generate a unique ID for the new reply
      content: replyContent,
      createdAt: new Date().toLocaleString(),
      score: 0,
      replyingTo: comment.user.username,
      user: currentUser,
    };

    // Add the new reply to the comment's replies array
    const updatedComment = {
      ...comment,
      replies: [...comment.replies, newReply],
    };

    // Find the index of the current comment in the person.comments array
    const commentIndex = person.comments.findIndex((c) => c.id === comment.id);

    // Create a new person object with the updated comment
    const updatedPerson = {
      ...person,
      comments: [
        ...person.comments.slice(0, commentIndex),
        updatedComment,
        ...person.comments.slice(commentIndex + 1),
      ],
    };

    // Update the person state with the new reply
    setPerson(updatedPerson);
  };

  return handleReplySubmit;
};

export default useCreateFirstLevelCommentReply;
