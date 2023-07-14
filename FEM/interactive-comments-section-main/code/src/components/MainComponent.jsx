import React, { useState, useEffect } from "react";
import data from "../../src/data.json";
import Form from "./Form";
import Comments from "./Comments";

const MainComponent = () => {
  const [person, setPerson] = useState(data);

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
          setPerson={setPerson}
          person={person}
          currentUser={person.currentUser}
        />
      </section>
    </>
  );
};

export default MainComponent;
