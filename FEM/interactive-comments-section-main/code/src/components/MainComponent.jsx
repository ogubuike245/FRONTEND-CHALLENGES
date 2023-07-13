import React, { useState, useEffect } from "react";
import data from "../../src/data.json";
import Form from "./Form";
import Comments from "./Comments";

const MainComponent = () => {
  const [person, setPerson] = useState({
    currentUser: {
      image: "/images/avatars/image-juliusomo.png", // Set a default image value (empty string or a placeholder image URL)
      username: "juliusomo", // Set a default username value
    },
    comments: [],
  });

  const [newComment, setNewComment] = useState("");

  // LOAD COMMENTS AND UPDATE COMMENTS FROM STATE
  useEffect(() => {
    // Load the state from localStorage
    const storedState = localStorage.getItem("personState");
    if (storedState) {
      setPerson(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem("personState", JSON.stringify(person));
  }, [person]);

  // CREATE NEW COMMENT
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new comment object
    const comment = {
      id: person.comments.length + 1,
      content: newComment,
      createdAt: new Date().toLocaleString(),
      score: 0,
      user: {
        image: person.currentUser.image,
        username: person.currentUser.username,
      },
      replies: [],
    };

    // Create a new copy of the person object with the updated comments array
    const updatedPerson = {
      ...person,
      comments: [...person.comments, comment],
    };

    setPerson(updatedPerson);
    setNewComment("");
  };

  // DELETE COMMENT
  const handleDeleteComment = (commentId) => {
    // Filter out the comment with the given id from the comments array
    const filteredComments = person.comments.filter(
      (comment) => comment.id !== commentId
    );

    // Create a new copy of the person object with the updated comments array
    const updatedPerson = {
      ...person,
      comments: filteredComments,
    };

    setPerson(updatedPerson);
  };

  return (
    <>
      <section className="comments">
        <Comments
          person={person}
          setPerson={setPerson}
          handleDeleteComment={handleDeleteComment}
        />

        <Form
          person={person}
          onSubmit={handleSubmit}
          setNewComment={setNewComment}
          newComment={newComment}
        />
      </section>
    </>
  );
};

export default MainComponent;
