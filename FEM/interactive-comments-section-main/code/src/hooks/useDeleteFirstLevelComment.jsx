const useDeleteComment = (initialPerson, setPerson) => {
  const handleDeleteComment = (commentId) => {
    const updatedPerson = {
      ...initialPerson,
      comments: deleteComment(initialPerson.comments, commentId),
    };
    setPerson(updatedPerson);
  };

  const deleteComment = (comments, commentId) => {
    return comments.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc;
      }

      if (comment.replies && comment.replies.length > 0) {
        const updatedReplies = deleteComment(comment.replies, commentId);
        return [...acc, { ...comment, replies: updatedReplies }];
      }

      return [...acc, comment];
    }, []);
  };

  return handleDeleteComment;
};

export default useDeleteComment;
