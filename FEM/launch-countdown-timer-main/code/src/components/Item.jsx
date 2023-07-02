const Item = ({ value, title }) => {
  return (
    <article>
      <div className="item">
        <p>{value}</p>
      </div>
      <h3>{title}</h3>
    </article>
  );
};

export default Item;
