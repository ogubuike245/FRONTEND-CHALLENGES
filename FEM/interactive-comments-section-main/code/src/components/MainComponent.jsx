import React, { useState, useEffect } from "react";
import data from "../../src/data.json";
import Form from "./Form";
import Comments from "./Comments";

const MainComponent = () => {
  const [person, setPerson] = useState(data);
  const [newComment, setNewComment] = useState("");

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

  return (
    <>
      <section className="comments">
        <Comments person={person} setPerson={setPerson} />

        <Form
          person={person}
          onSubmit={handleSubmit}
          setNewComment={setNewComment}
        />
      </section>
    </>
  );
};

export default MainComponent;
