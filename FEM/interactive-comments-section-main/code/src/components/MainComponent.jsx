import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import FirstLevelCommentsCreationForm from "./FirstLevelComment/CreationForm";
import LoadingSpinner from "./Loader/LoadingSpinner";
import data from "../data.json";

// HOOKS
import { CurrentUserProvider } from "../hooks/useCurrentUser";

const MainComponent = () => {
  const [loading, setLoading] = useState(true);
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

  return (
    <section className="comments">
      <CurrentUserProvider currentUser={data.currentUser}>
        <Comments person={person} setPerson={setPerson} />
        <FirstLevelCommentsCreationForm setPerson={setPerson} person={person} />
      </CurrentUserProvider>
    </section>
  );
};

export default MainComponent;
