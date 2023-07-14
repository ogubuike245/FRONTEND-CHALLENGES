import { useState, useEffect } from "react";
import Comments from "./Comments";
import FirstLevelForm from "./FirstLevelForm";
import LoadingSpinner from "./LoadingSpinner";

const MainComponent = () => {
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedState = localStorage.getItem("personState");
    if (storedState) {
      setTimeout(() => {
        setPerson(JSON.parse(storedState));
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("personState", JSON.stringify(person));
  }, [person]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="comments">
      <Comments
        person={person}
        setPerson={setPerson}
        currentUser={person.currentUser}
      />
      <FirstLevelForm
        setPerson={setPerson}
        person={person}
        currentUser={person.currentUser}
      />
    </section>
  );
};

export default MainComponent;
