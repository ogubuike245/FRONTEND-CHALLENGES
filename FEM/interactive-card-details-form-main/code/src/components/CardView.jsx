const CardView = ({ cvc, holder, number, month, year }) => {
  function format(value) {
    return value.toString().replace(/\d{4}(?=.)/g, "$& ");
  }

  const displayMonth = month !== "" ? parseInt(month, 10).toString() : "00";
  const displayYear = year !== "" ? parseInt(year, 10).toString() : "00";

  return (
    <article>
      <div className="card card-front">
        <span>
          <img src="../../public/images/card-logo.svg" alt="" />
        </span>

        <div className="card-info">
          <h3 className="card-number">
            {number !== "" ? format(number) : "0000 0000 0000 0000"}
          </h3>
          <div className="bottom-info">
            <p className="card-holder">
              {holder !== "" ? holder : "Jane Appleseed"}
            </p>
            <span className="card-expiration-date">
              {displayMonth.length === 1 ? `0${displayMonth}` : displayMonth}/
              {displayYear.length === 1 ? `0${displayYear}` : displayYear}
            </span>
          </div>
        </div>
      </div>
      <div className="card card-back">
        <span>{cvc !== "" ? cvc : "000"}</span>
      </div>
    </article>
  );
};

export default CardView;
