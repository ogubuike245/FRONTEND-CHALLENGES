import { useState, useEffect } from "react";

const useVote = (initialScore, initialPerson, setPerson, comment) => {
  const [score, setScore] = useState(initialScore);

  const handleUpVote = () => {
    const updatedPerson = {
      ...initialPerson,
      comments: initialPerson.comments.map((upVotedComment) => {
        if (upVotedComment.id === comment.id) {
          setScore((prevScore) => prevScore + 1);
          return { ...upVotedComment, score: upVotedComment.score + 1 };
        }
        return upVotedComment;
      }),
    };
    setPerson(updatedPerson);
  };

  const handleDownVote = () => {
    if (score > 0) {
      const updatedPerson = {
        ...initialPerson,
        comments: initialPerson.comments.map((downVotedComment) => {
          if (downVotedComment.id === comment.id) {
            setScore((prevScore) => prevScore - 1);
            return { ...downVotedComment, score: downVotedComment.score - 1 };
          }
          return downVotedComment;
        }),
      };
      setPerson(updatedPerson);
    }
  };

  return [score, handleUpVote, handleDownVote];
};

export default useVote;
