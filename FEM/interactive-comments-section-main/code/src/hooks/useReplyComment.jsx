import { useState } from "react";

const useReplyComment = (person, setPerson) => {
  const [replyContent, setReplyContent] = useState("");

  const handleReplyComment = (commentId) => {
    const newReply = {
      id: person.comments.length + 1,
      content: replyContent,
      createdAt: new Date().toLocaleString(),
      score: 0,
      user: {
        image: person.currentUser.image,
        username: person.currentUser.username,
      },
      replies: [],
    };

    const updatedPerson = {
      ...person,
      comments: person.comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      }),
    };

    setPerson(updatedPerson);
    setReplyContent("");
  };

  return [replyContent, setReplyContent, handleReplyComment];
};

export default useReplyComment;
