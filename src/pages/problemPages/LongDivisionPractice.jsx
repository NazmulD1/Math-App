import React, { useState } from "react";
import PracticePage from "../../components/practice/PracticePage";
import { generateLongDivisionProblem } from "../../utils/problemGenerators";

const LongDivisionPractice = () => {
  const [quotient, setQuotient] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleSubmit = (userAnswer, correctAnswer) => {
    const userQuotient = parseInt(userAnswer.quotient, 10);
    const userRemainder = parseInt(userAnswer.remainder, 10);

    if (
      userQuotient === correctAnswer.quotient &&
      userRemainder === correctAnswer.remainder
    ) {
      return { message: "Correct!", correctAnswer: null };
    } else {
      return {
        message: "Incorrect!",
        correctAnswer: `Quotient: ${correctAnswer.quotient}, Remainder: ${correctAnswer.remainder}`,
      };
    }
  };

  return (
    <PracticePage
      title="Long Division Practice"
      problemGenerator={generateLongDivisionProblem}
      backToPath="/freestudy"
      backToText="Back to Free Study"
      validateAnswer={handleSubmit}
      customInput={
        <div>
          <label>
            Quotient:
            <input
              type="number"
              value={quotient}
              onChange={(e) => setQuotient(e.target.value)}
            />
          </label>
          <label>
            Remainder:
            <input
              type="number"
              value={remainder}
              onChange={(e) => setRemainder(e.target.value)}
            />
          </label>
        </div>
      }
      unitNumber={10}
    />
  );
};

export default LongDivisionPractice;
