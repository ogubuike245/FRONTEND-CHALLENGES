import React, { useState } from "react";
import moment from "moment";

import Reply from "./Reply";
import useVote from "../hooks/useVotes";
import useDeleteComment from "../hooks/useDeleteComment";
import useEditComment from "../hooks/useEditComment";

const Comment = ({ comment, person, setPerson }) => {
  const [edit, setEdit] = useState(false);

  const [score, handleUpVote, handleDownVote] = useVote(
    comment.score,
    person,
    setPerson,
    comment
  );
  const handleDeleteComment = useDeleteComment(person, setPerson);

  const [editedContent, setEditedContent, handleSaveEdit] = useEditComment(
    person,
    setPerson
  );

  const handleEditComment = () => {
    setEditedContent(comment.content);
    setEdit(!edit);
  };

  const handleCancelEdit = () => {
    setEditedContent("");
    setEdit(false);
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
            <img src={comment.user?.image?.png} alt="" />
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
              {!edit ? (
                <>
                  <span
                    className="delete-icon"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <i className="fa fa-trash"></i>Delete
                  </span>
                  <span onClick={handleEditComment}>
                    <i className="fa fa-edit"></i>Edit
                  </span>
                </>
              ) : (
                <>
                  <span onClick={() => handleSaveEdit(comment.id)}>
                    <i className="fa fa-save"></i>Save
                  </span>
                  <span onClick={handleCancelEdit}>
                    <i className="fa fa-times"></i>Cancel
                  </span>
                </>
              )}
            </div>
          ) : (
            <div>
              <span>
                <i className="fa fa-reply"></i>Reply
              </span>
            </div>
          )}
        </div>

        {edit && (
          <div className="edit-comment">
            <textarea
              placeholder="Edit your comment"
              rows="3"
              cols="30"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            ></textarea>
          </div>
        )}

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
                setPerson={setPerson}
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
