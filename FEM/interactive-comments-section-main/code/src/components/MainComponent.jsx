import React, { useState } from "react";
import data from "../../../data.json";
import Comment from "./Comment";

const MainComponent = () => {
  const [person, setPerson] = useState(data);
  console.log(data);
  return (
    <section className="comments">
      {person.comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </section>
  );
};

export default MainComponent;
