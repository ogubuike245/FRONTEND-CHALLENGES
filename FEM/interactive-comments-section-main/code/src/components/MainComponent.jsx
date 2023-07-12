import React, { useState } from "react";
import data from "../../../data.json";
import Comment from "./Comment";

const MainComponent = () => {
  const [person, setPerson] = useState(data);
  return (
    <>
      <section className="comments">
        {person.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} person={person} />;
        })}

        <form className="form-input">
          <div className="avatar">
            <img src={person.currentUser.image.png} alt="" />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add a comment..."
          ></textarea>

          <button type="submit">SEND</button>
        </form>
      </section>
    </>
  );
};

export default MainComponent;
