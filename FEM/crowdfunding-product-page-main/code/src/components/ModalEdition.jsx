import { useState } from "react";

const ModalEdition = ({
  title,
  description,
  amount,
  pledge,
  selected,
  onSelect,
  handleSubmit,
}) => {
  const handleCheckboxChange = () => {
    onSelect(title);
  };

  return (
    <article
      style={
        selected
          ? { border: "2px solid var(--DarkCyan)" }
          : { border: "2px solid var(--border-color-gray)" }
      }
    >
      <div className="check-box">
        <input
          type="radio"
          name="edition"
          id={`edition-${title}`}
          onChange={handleCheckboxChange}
          checked={selected}
          style={{ width: "20px", height: "20px" }}
        />

        <div>
          <h3>{title}</h3>
          <a href="#"> {pledge && `Pledge ${pledge} or more `}</a>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>

      <div className="amount-left">
        <strong>{amount}</strong>
        <span>{pledge && "left"}</span>
      </div>
      {selected && (
        <div className="actions">
          <h4>Enter your pledge</h4>

          <form onSubmit={handleSubmit}>
            <div>
              <span>$</span>
              <input
                type="number"
                name=""
                id=""
                value={pledge}
                onChange={() => {}}
              />
            </div>
            <button>Continue</button>
          </form>
        </div>
      )}
    </article>
  );
};

export default ModalEdition;
