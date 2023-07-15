const useDeleteCommentSystem = (initialPerson, setPerson) => {
  const handleDeleteComment = (commentId) => {
    const updatedPerson = {
      ...initialPerson,
      comments: deleteItem(initialPerson.comments, commentId),
    };
    setPerson(updatedPerson);
  };

  const deleteItem = (items, itemId) => {
    return items.reduce((acc, item) => {
      if (item.id === itemId) {
        return acc;
      }

      if (item.replies && item.replies.length > 0) {
        const updatedReplies = deleteItem(item.replies, itemId);
        return [...acc, { ...item, replies: updatedReplies }];
      }

      return [...acc, item];
    }, []);
  };

  return handleDeleteComment;
};

export default useDeleteCommentSystem;
