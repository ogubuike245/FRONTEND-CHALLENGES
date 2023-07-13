import React, { useState } from "react";
import Reply from "./Reply";

import moment from "moment";

const Comment = ({ comment, person, setPerson, handleDeleteComment }) => {
  const [score, setScore] = useState(comment.score);

  const handleUpVote = () => {
    // This function takes care of upvoting a comment.
    // It first gets the current person object and the comment that was upvoted.
    const updatedPerson = {
      ...person,
      comments: person.comments.map((upVotedComment) => {
        // If the comment that was upvoted is found,
        // the score of the comment is incremented by 1.
        if (upVotedComment.id === comment.id) {
          return { ...upVotedComment, score: upVotedComment.score + 1 };
        }
        // Otherwise, the comment is returned as-is.
        return upVotedComment;
      }),
    };

    // The updated person object is then set to the state of the person component.
    setPerson(updatedPerson);

    // The score of the comment is also incremented by 1.
    setScore(score + 1);
  };

  const handleDownVote = () => {
    // This function takes care of downvoting a comment.
    // It first checks if the score of the comment is greater than 0.
    // If it is, then the function proceeds to update the comment's score by 1.
    if (score > 0) {
      const updatedPerson = {
        ...person,
        comments: person.comments.map((downVotedComment) => {
          // If the comment that was downvoted is found,
          // the score of the comment is decremented by 1.
          if (downVotedComment.id === comment.id) {
            return { ...downVotedComment, score: downVotedComment.score - 1 };
          }
          // Otherwise, the comment is returned as-is.
          return downVotedComment;
        }),
      };

      // The updated person object is then set to the state of the person component.
      setPerson(updatedPerson);

      // The score of the comment is also decremented by 1.
      setScore(score - 1);
    }
  };

  return (
    <>
      <article className="comment">
        {/* SCORE  */}
        <div className="score">
          <i className="fa-solid fa-plus" onClick={handleUpVote}></i>
          <h4>{score}</h4>
          <i className="fa-solid fa-minus" onClick={handleDownVote}></i>
        </div>

        {/* USER INFO  */}
        <div className="user-info">
          <div className="avatar">
            <img src={comment.user?.image} alt="" />
          </div>
          <div className="username">
            <h5>{comment.user.username}</h5>
          </div>
          <div className="createdAt">
            <span>{moment(comment.createdAt).fromNow()}</span>
          </div>
        </div>

        {/* ACTIONS  */}
        <div className="actions">
          {person.currentUser.username === comment.user.username ? (
            <div>
              <span
                className="delete-icon"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <i className="fa fa-trash"></i>Delete
              </span>
              <span>
                <i className="fa fa-edit"></i>Edit
              </span>
            </div>
          ) : (
            <div>
              <span>
                <i className="fa fa-reply"></i>Reply
              </span>
            </div>
          )}
        </div>

        {/* COMMENT DESCRIPTION */}
        <div className="description">
          <p>{comment.content}</p>
        </div>
      </article>

      <div className={comment.replies.length !== 0 ? "replies-container" : ""}>
        {comment.replies &&
          comment.replies.map((reply, index) => {
            return (
              <Reply
                comment={reply}
                person={person}
                key={index}
                handleDeleteComment={handleDeleteComment}
              />
            );
          })}
      </div>
    </>
  );
};

export default Comment;
