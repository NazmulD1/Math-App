import React, { useState } from "react";
import PracticePage from "../../components/practice/PracticePage";
import { generateDivisionWithRemaindersProblem} from "../../utils/problemGenerators";

const DivisionWithRemaindersPractice = () => {
  const [quotient, setQuotient] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleSubmit = (userAnswer, correctAnswer) => {
    // Create an object with the user's answers
    const userAnswerObj = {
      quotient: parseInt(quotient, 10),
      remainder: parseInt(remainder, 10)
    };

    if (
      userAnswerObj.quotient === correctAnswer.quotient &&
      userAnswerObj.remainder === correctAnswer.remainder
    ) {
      return { message: "Correct!", correctAnswer: null };
    } else {
      return {
        message: "Incorrect!",
        correctAnswer: `Quotient: ${correctAnswer.quotient}, Remainder: ${correctAnswer.remainder}`,
      };
    }
  };

  const customInputForm = (
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
  );

  return (
    <PracticePage
      title="Division With Remainders Practice"
      problemGenerator={generateDivisionWithRemaindersProblem}
      backToPath="/freestudy"
      backToText="Back to Free Study"
      validateAnswer={handleSubmit}
      customInput={customInputForm}
      unitNumber={9}
    />
  );
};

export default DivisionWithRemaindersPractice;
