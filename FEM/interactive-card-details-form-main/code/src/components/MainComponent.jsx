import InputArea from "./InputArea";
import CardView from "./CardView";
import { useState } from "react";

const MainComponent = () => {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "holder") setHolder(value);
    else if (name === "number") setNumber(value);
    else if (name === "month") setMonth(value);
    else if (name === "year") setYear(value);
    else if (name === "cvc") setCvc(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    const CANT_BE_BLANK = "Can't be blank";

    if (!holder) newErrors.holder = CANT_BE_BLANK;
    if (!number) newErrors.number = CANT_BE_BLANK;
    if (!month) newErrors.month = CANT_BE_BLANK;
    if (!year) newErrors.year = CANT_BE_BLANK;
    if (!cvc) newErrors.cvc = CANT_BE_BLANK;

    if (number && !/^\d{16}$/.test(number))
      newErrors.number = "Invalid card number format";

    if (month && (isNaN(month) || parseInt(month) < 1 || parseInt(month) > 12))
      newErrors.month = "Invalid month";
    if (year && (isNaN(year) || parseInt(year) < 21 || parseInt(year) > 99))
      newErrors.year = "Invalid year";
    if (cvc && !/^\d{3}$/.test(cvc))
      newErrors.cvc = "CVC must be a 3-digit number.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <CardView
        cvc={cvc}
        holder={holder}
        number={number}
        month={month}
        year={year}
      />
      <InputArea
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
        holder={holder}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
        isSubmitted={isSubmitted}
      />
    </>
  );
};
export default MainComponent;
