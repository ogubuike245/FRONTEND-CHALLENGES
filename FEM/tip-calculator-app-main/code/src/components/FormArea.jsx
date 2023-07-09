const FormArea = ({
  handleInputChange,
  handleTipSelection,
  handleNumberOfPeopleChange,
  billAmount,
  numberOfPeople,
  tipPercentage,
}) => {
  return (
    <div className="input-area">
      {/* BILL INPUT AREA */}
      <div className="bill">
        <label htmlFor="bill">Bill</label>
        <div className="bill-input">
          <span>
            <img src="/images/icon-dollar.svg" alt="" />
          </span>
          <input
            type="number"
            name="bill"
            id="bill"
            min={0}
            onInput={handleInputChange}
            value={billAmount}
          />
        </div>
      </div>

      {/* TIPS LIST AREA */}
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

      {/* NUMBER OF PEOPLE AREA */}
      <div className="people">
        <label htmlFor="number-of-people">Number of People</label>
        <div>
          <span>
            <img src="/images/icon-person.svg" alt="" />
          </span>
          <input
            type="number"
            name="number-of-people"
            id="number-of-people"
            min={1}
            onInput={handleNumberOfPeopleChange}
            value={numberOfPeople}
          />
        </div>
      </div>
    </div>
  );
};

export default FormArea;
