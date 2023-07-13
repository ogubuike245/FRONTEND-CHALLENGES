import { useState } from "react";

const useEditComment = (person, setPerson) => {
  const [editedContent, setEditedContent] = useState("");

  const handleSaveEdit = (commentId) => {
    const updatedPerson = {
      ...person,
      comments: person.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, content: editedContent };
        }
        return comment;
      }),
    };
    setPerson(updatedPerson);
    setEditedContent("");
  };

  return [editedContent, setEditedContent, handleSaveEdit];
};

export default useEditComment;
