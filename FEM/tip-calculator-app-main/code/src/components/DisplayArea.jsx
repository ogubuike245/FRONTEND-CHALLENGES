const DisplayArea = ({ tipAmount, totalAmount, handleReset }) => {
  return (
    <div className="display-area">
      <div className="output-price">
        <div>
          <div className="desc">
            <h3>Tip Amount</h3>
            <span> / person</span>
          </div>

          <h1>${tipAmount.toFixed(2)}</h1>
        </div>
        <div>
          <div className="desc">
            <h3>Total</h3>
            <span> / person</span>
          </div>
          <h1>${totalAmount.toFixed(2)}</h1>
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DisplayArea;
