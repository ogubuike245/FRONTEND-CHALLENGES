import React, { useState, useEffect } from "react";
import data from "../../src/data.json";
import Form from "./Form";
import Comments from "./Comments";
import useCreateComment from "../hooks/useCreateComment";

const MainComponent = () => {
  const [person, setPerson] = useState(data);
  const [newComment, setNewComment, handleCreateComment] = useCreateComment(
    person,
    setPerson
  );

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

  return (
    <>
      <section className="comments">
        <Comments person={person} setPerson={setPerson} />

        <Form
          onSubmit={handleCreateComment}
          setNewComment={setNewComment}
          newComment={newComment}
          currentUser={person.currentUser}
        />
      </section>
    </>
  );
};

export default MainComponent;
