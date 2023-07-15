import { useState } from "react";

const useEditCommentSystem = (person, setPerson, initialComment) => {
  const [editedContent, setEditedContent] = useState(initialComment.content);

  const handleSaveEdit = () => {
    const updatedPerson = {
      ...person,
      comments: person.comments.map((comment) => {
        if (comment.id === initialComment.id) {
          return { ...comment, content: editedContent };
        }
        // Check if it's a first-level comment and has replies
        if (comment.replies && comment.replies.length > 0) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === initialComment.id) {
              return { ...reply, content: editedContent };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      }),
    };
    setPerson(updatedPerson);
    setEditedContent("");
  };

  return [editedContent, setEditedContent, handleSaveEdit];
};

export default useEditCommentSystem;
