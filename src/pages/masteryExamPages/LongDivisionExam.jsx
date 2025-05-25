import { useParams } from "react-router-dom";
import { generateLongDivisionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";
import React, { useState } from "react";

const LongDivisionExam = () => {
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
        <MasteryExam
            title="Long Division Exam"
            problemGenerator={generateLongDivisionProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
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
            validateAnswer={handleSubmit}
            questionCount={14}
            timeLimit={250}
        />
    );
};

export default LongDivisionExam;