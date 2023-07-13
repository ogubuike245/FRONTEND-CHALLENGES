import React, { useState } from "react";
import data from "../../../data.json";
import Form from "./Form";
import Comments from "./Comments";

const MainComponent = () => {
  const [person, setPerson] = useState(data);
  return (
    <>
      <section className="comments">
        <Comments person={person} />

        <Form person={person} />
      </section>
    </>
  );
};

export default MainComponent;
