import React from "react";

const Card = ({ cardData }) => {
  return (
    <article className="card">
      <div>
        <img src={cardData.icon} alt="" />
      </div>

      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </article>
  );
};

export default Card;
