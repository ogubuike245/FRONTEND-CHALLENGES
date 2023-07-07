// Question.js
import { useState } from "react";

function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <li
      className={`question ${showAnswer ? "expanded" : ""}`}
      onClick={toggleAnswer}
    >
      <div className="question-info">
        <span>{question}</span>
        {showAnswer && <p>{answer}</p>}
      </div>
      <div className={`arrow ${showAnswer ? "rotate" : ""}`}>
        <img src="/images/icon-arrow-down.svg" alt="" />
      </div>
    </li>
  );
}

export default Question;
