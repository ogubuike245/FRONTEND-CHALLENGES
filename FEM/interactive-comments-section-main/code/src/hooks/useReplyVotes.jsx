import { useState } from "react";

const useReplyVotes = (initialScore, initialPerson, setPerson, comment) => {
  const [score, setScore] = useState(initialScore);

  const handleUpVote = () => {
    const updatedPerson = {
      ...initialPerson,
      comments: initialPerson.comments.map((firstLevelComment) => {
        const updatedReplies = firstLevelComment.replies.map((reply) => {
          console.log("replyID:", reply.id);
          console.log("commentID:", comment.id);
          if (reply.id === comment.id) {
            console.log("FOUND REPLY:", reply);
            return { ...reply, score: reply.score + 1 };
          }
          return reply;
        });
        return { ...firstLevelComment, replies: updatedReplies };
      }),
    };
    setPerson(updatedPerson);
    setScore((prevScore) => prevScore + 1);
  };

  const handleDownVote = () => {
    if (score > 0) {
      const updatedPerson = {
        ...initialPerson,
        comments: initialPerson.comments.map((firstLevelComment) => {
          const updatedReplies = firstLevelComment.replies.map((reply) => {
            if (reply.id === comment.id) {
              return { ...reply, score: reply.score - 1 };
            }
            return reply;
          });
          return { ...firstLevelComment, replies: updatedReplies };
        }),
      };
      setPerson(updatedPerson);
      setScore((prevScore) => prevScore - 1);
    }
  };

  return [score, handleUpVote, handleDownVote];
};

export default useReplyVotes;
