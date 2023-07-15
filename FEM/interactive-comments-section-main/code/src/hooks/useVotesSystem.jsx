import { useState } from "react";

const useVotesSystem = (initialScore, initialPerson, setPerson, comment) => {
  const [score, setScore] = useState(initialScore);
  const [voted, setVoted] = useState(false); // Add a state variable to track voting status
  const [voteType, setVoteType] = useState(null); // Add a state variable to track the type of vote (upvote or downvote)

  const handleUpVote = () => {
    if (!voted || voteType === "downvote") {
      const updatedPerson = {
        ...initialPerson,
        comments: initialPerson.comments.map((item) => {
          if (item.id === comment.id) {
            if (voteType === "downvote") {
              // Undo downvote and add upvote
              return { ...item, score: item.score + 1 };
            } else {
              // Add upvote
              return { ...item, score: item.score + 1 };
            }
          } else if (item.replies) {
            const updatedReplies = item.replies.map((reply) => {
              if (reply.id === comment.id) {
                if (voteType === "downvote") {
                  // Undo downvote and add upvote
                  return { ...reply, score: reply.score + 1 };
                } else {
                  // Add upvote
                  return { ...reply, score: reply.score + 1 };
                }
              }
              return reply;
            });
            return { ...item, replies: updatedReplies };
          }
          return item;
        }),
      };
      setPerson(updatedPerson);
      setScore((prevScore) =>
        voteType === "downvote" ? prevScore + 1 : prevScore + 1
      );
      setVoted(true); // Set voted status to true after voting
      setVoteType("upvote"); // Set the vote type to upvote
    }
  };

  const handleDownVote = () => {
    if (!voted || voteType === "upvote") {
      const updatedPerson = {
        ...initialPerson,
        comments: initialPerson.comments.map((item) => {
          if (item.id === comment.id) {
            if (voteType === "upvote") {
              // Undo upvote and add downvote
              return { ...item, score: item.score - 1 };
            } else {
              // Add downvote
              return { ...item, score: item.score - 1 };
            }
          } else if (item.replies) {
            const updatedReplies = item.replies.map((reply) => {
              if (reply.id === comment.id) {
                if (voteType === "upvote") {
                  // Undo upvote and add downvote
                  return { ...reply, score: reply.score - 1 };
                } else {
                  // Add downvote
                  return { ...reply, score: reply.score - 1 };
                }
              }
              return reply;
            });
            return { ...item, replies: updatedReplies };
          }
          return item;
        }),
      };
      setPerson(updatedPerson);
      setScore((prevScore) =>
        voteType === "upvote" ? prevScore - 1 : prevScore - 1
      );
      setVoted(true); // Set voted status to true after voting
      setVoteType("downvote"); // Set the vote type to downvote
    }
  };

  return [score, handleUpVote, handleDownVote];
};

export default useVotesSystem;
