import { useState } from "react";
import FormArea from "./FormArea";
import DisplayArea from "./DisplayArea";

const TipsCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (event) => {
    const bill = parseFloat(event.target.value);
    setBillAmount(bill);
    calculateTipAndTotal(bill, tipPercentage, numberOfPeople);
  };

  const handleTipSelection = (percentage) => {
    setTipPercentage(percentage);
    calculateTipAndTotal(billAmount, percentage, numberOfPeople);
  };

  const handleNumberOfPeopleChange = (event) => {
    const people = parseInt(event.target.value);
    setNumberOfPeople(people);
    calculateTipAndTotal(billAmount, tipPercentage, people);
  };

  const calculateTipAndTotal = (bill, percentage, people) => {
    const tip = (bill * percentage) / 100;
    const total = bill + tip;
    const tipPerPerson = tip / people;
    const totalPerPerson = total / people;

    setTipAmount(tipPerPerson);
    setTotalAmount(totalPerPerson);
  };

  const handleReset = () => {
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <>
      <FormArea
        handleInputChange={handleInputChange}
        handleTipSelection={handleTipSelection}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        billAmount={billAmount}
        numberOfPeople={numberOfPeople}
        tipPercentage={tipPercentage}
      />
      <DisplayArea
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        handleReset={handleReset}
      />
    </>
  );
};

export default TipsCalculator;
