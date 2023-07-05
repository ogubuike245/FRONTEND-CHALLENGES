const Edition = ({ title, pledge, amount, status, description }) => {
  return (
    <div className="item">
      <div className="heading">
        <h3>{title}</h3>
        <a href="#"> Pledge ${pledge} or more</a>
      </div>
      <p>{description}</p>

      <div className="actions">
        <div className="amount-left">
          <strong>{amount}</strong>
          <span>left</span>
        </div>
        <button> {status}</button>
      </div>
    </div>
  );
};

export default Edition;
