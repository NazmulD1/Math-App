import React, { useState } from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateDecimalArithmeticProblem } from '../../../utils/problemGenerators';

const DecimalArithmetic = () => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (userAnswer, correctAnswer) => {
        // Convert user's answer to a number and round to 3 decimal places
        const userDecimal = parseFloat(userAnswer).toFixed(3);
        const correctDecimal = parseFloat(correctAnswer).toFixed(3);

        if (userDecimal === correctDecimal) {
            return { message: "Correct!", correctAnswer: null };
        } else {
            return {
                message: "Incorrect!",
                correctAnswer: correctAnswer
            };
        }
    };

    const handleAnswerChange = (newValue) => {
        setAnswer(newValue);
    };

    const customInputForm = (
        <div className="decimal-input">
            <input
                type="number"
                value={answer}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder="Enter answer"
                step="0.001"
            />
        </div>
    );

    const handleNewProblem = () => {
        setAnswer(""); // Reset the input when a new problem is generated
    };

    return (
        <PracticePage
            title="Basic Arithmetic with Decimals"
            problemGenerator={generateDecimalArithmeticProblem}
            validateAnswer={handleSubmit}
            backToPath="/practice/decimals"
            backToText="Back to Decimals"
            customInput={customInputForm}
            onNewProblem={handleNewProblem}
            userAnswer={answer}
            onAnswerChange={handleAnswerChange}
            instructions={
                <div className="instructions">
                    <p>When performing arithmetic with decimals:</p>
                    <ol>
                        <li>Line up the decimal points when adding or subtracting</li>
                        <li>For multiplication, multiply as normal and count decimal places</li>
                        <li>For division, move the decimal point in both numbers</li>
                        <li>Round your answer to 3 decimal places if needed</li>
                    </ol>
                    <p>Example: 2.5 + 1.75 = 4.25</p>
                </div>
            }
            unitNumber={12}
        />
    );
};

export default DecimalArithmetic; 