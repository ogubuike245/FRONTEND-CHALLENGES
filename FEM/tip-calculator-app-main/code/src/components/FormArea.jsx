import { useState } from "react";

const FormArea = ({
  handleInputChange,
  handleTipSelection,
  handleNumberOfPeopleChange,
  billAmount,
  numberOfPeople,
  tipPercentage,
}) => {
  const [isBillInputFocused, setIsBillInputFocused] = useState(false);
  const [isPeopleInputFocused, setIsPeopleInputFocused] = useState(false);

  const handleBillInputFocus = () => {
    setIsBillInputFocused(true);
  };

  const handlePeopleInputFocus = () => {
    setIsPeopleInputFocused(true);
  };

  const handleBillInputBlur = () => {
    setIsBillInputFocused(false);
  };

  const handlePeopleInputBlur = () => {
    setIsPeopleInputFocused(false);
  };

  return (
    <div className="input-area">
      <div className="bill">
        <label htmlFor="bill">Bill</label>
        <div
          className={`bill-input ${isBillInputFocused ? "input-border" : ""}`}
        >
          <span>
            <img src="/images/icon-dollar.svg" alt="" />
          </span>
          <input
            type="number"
            name="bill"
            id="bill"
            min={0}
            onInput={handleInputChange}
            onFocus={handleBillInputFocus}
            onBlur={handleBillInputBlur}
            value={billAmount}
          />
        </div>
      </div>

      <div className="tips-list">
        <h3>Select Tip %</h3>
        <ul>
          <li
            onClick={() => handleTipSelection(5)}
            className={tipPercentage === 5 ? "active" : ""}
          >
            5%
          </li>
          <li
            onClick={() => handleTipSelection(10)}
            className={tipPercentage === 10 ? "active" : ""}
          >
            10%
          </li>
          <li
            onClick={() => handleTipSelection(15)}
            className={tipPercentage === 15 ? "active" : ""}
          >
            15%
          </li>
          <li
            onClick={() => handleTipSelection(25)}
            className={tipPercentage === 25 ? "active" : ""}
          >
            25%
          </li>
          <li
            onClick={() => handleTipSelection(50)}
            className={tipPercentage === 50 ? "active" : ""}
          >
            50%
          </li>
          <li>
            <input
              type="number"
              min={0}
              onInput={(event) =>
                handleTipSelection(parseFloat(event.target.value))
              }
              value={tipPercentage}
              placeholder="Custom"
            />
          </li>
        </ul>
      </div>

      <div className="people">
        <label htmlFor="number-of-people">Number of People</label>
        <div className={`${isPeopleInputFocused ? "  input-border" : ""}`}>
          <span>
            <img src="/images/icon-person.svg" alt="" />
          </span>
          <input
            type="number"
            name="number-of-people"
            id="number-of-people"
            min={1}
            onFocus={handlePeopleInputFocus}
            onBlur={handlePeopleInputBlur}
            onInput={handleNumberOfPeopleChange}
            value={numberOfPeople}
          />
        </div>
      </div>
    </div>
  );
};

export default FormArea;
