import React, { useState } from "react";
import { generateDivisionWithRemaindersProblem} from "../../utils/problemGenerators";
import MasteryExam from "../../components/MasteryExam";

const DivisionWithRemaindersExam = () => {
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
    <MasteryExam
        title="Division With Remainders Exam"
        problemGenerator={generateDivisionWithRemaindersProblem}
        backToPath="/roadmap"
        backToText="Back to RoadMap"
        validateAnswer={handleSubmit}
        customInput={customInputForm}
        questionCount={49}
        timeLimit={150}
    />
  );
};

export default DivisionWithRemaindersExam;
