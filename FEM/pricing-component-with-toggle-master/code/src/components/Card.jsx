const Card = ({ card }) => {
  const { title, price, storage, users, sendLimit } = card;

  return (
    <article className={`card ${title.toLowerCase()}`}>
      <h3>{title}</h3>
      <h1 className="price">${price}</h1>

      <ul>
        <li>{storage} Storage</li>
        <li>{users} Users Allowed</li>
        <li>Send up to {sendLimit}</li>
      </ul>

      <button>Learn More</button>
    </article>
  );
};

export default Card;
