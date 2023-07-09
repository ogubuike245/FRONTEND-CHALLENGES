import Thankyou from "./Thankyou";

const InputArea = ({
  handleInputChange,
  handleSubmit,
  errors,
  holder,
  number,
  month,
  year,
  cvc,
  isSubmitted,
}) => {
  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div class="row-one">
            <label for="holder">Cardholder Name</label>
            <input
              type="text"
              name="holder"
              id="holder"
              placeholder="e.g. Jane Appleseed"
              value={holder}
              onChange={handleInputChange}
              className={errors.holder ? "error-border" : ""}
            />
            {errors.holder && <span className="error">{errors.holder}</span>}
          </div>
          <div class="row-two">
            <label for="number">Card Number</label>
            <input
              type="text"
              name="number"
              id="number"
              maxLength={16}
              placeholder="e.g. 1234 5678 9123 0000"
              value={number}
              onChange={handleInputChange}
              className={errors.number ? "error-border" : ""}
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>
          <div class="row-three">
            <div>
              <label for="">Exp. Date (MM/YY)</label>
              <div>
                <input
                  type="text"
                  name="month"
                  id="month"
                  maxLength={2}
                  placeholder="MM"
                  value={month}
                  onChange={handleInputChange}
                  className={errors.month ? "error-border" : ""}
                />
                <input
                  type="text"
                  name="year"
                  id="year"
                  maxLength={2}
                  placeholder="YY"
                  value={year}
                  onChange={handleInputChange}
                  className={errors.year ? "error-border" : ""}
                />
              </div>
              <div className="errors-box">
                <span className="error"> {errors.month && errors.month}</span>
                <span className="error"> {errors.year && errors.year}</span>
              </div>
            </div>

            <div>
              <label for="">CVC</label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                maxLength={3}
                placeholder="e.g. 123"
                value={cvc}
                onChange={handleInputChange}
                className={errors.cvc ? "error-border" : ""}
              />
              {errors.cvc && <span className="error">{errors.cvc}</span>}
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <Thankyou />
      )}
    </>
  );
};

export default InputArea;
