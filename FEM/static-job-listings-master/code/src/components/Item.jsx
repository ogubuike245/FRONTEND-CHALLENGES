import React from "react";

const Item = ({ title }) => {
  return (
    <a className="item-link" href="#">
      {title}
    </a>
  );
};

export default Item;
