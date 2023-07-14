import { useState, useEffect } from "react";
import Comments from "./Comments";
import FirstLevelCommentsCreationForm from "./FirstLevelCommentCreationForm";
import LoadingSpinner from "./LoadingSpinner";
import data from "../data.json";

const MainComponent = () => {
  const [person, setPerson] = useState(data);

  useEffect(() => {
    const storedState = localStorage.getItem("personState");
    if (storedState) {
      setPerson(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    if (person) {
      localStorage.setItem("personState", JSON.stringify(person));
    }
  }, [person]);

  if (!person) {
    return <LoadingSpinner />;
  }

  return (
    <section className="comments">
      <Comments
        person={person}
        setPerson={setPerson}
        currentUser={person.currentUser}
      />
      <FirstLevelCommentsCreationForm
        setPerson={setPerson}
        person={person}
        currentUser={person.currentUser}
      />
    </section>
  );
};

export default MainComponent;
