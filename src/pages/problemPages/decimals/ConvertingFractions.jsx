import React, { useState } from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateConvertingFractionsProblem } from '../../../utils/problemGenerators';

const ConvertingFractions = () => {
    const [decimal, setDecimal] = useState("");

    const handleSubmit = (userAnswer, correctAnswer) => {
        // Convert user's decimal input to a number and round to 3 decimal places
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
        setDecimal(newValue);
    };

    const handleNewProblem = () => {
        setDecimal(""); // Reset the input when a new problem is generated
    };

    return (
        <PracticePage
            title="Converting Fractions to Decimals"
            problemGenerator={generateConvertingFractionsProblem}
            validateAnswer={handleSubmit}
            backToPath="/practice/decimals"
            backToText="Back to Decimals"
            onNewProblem={handleNewProblem}
            userAnswer={decimal}
            onAnswerChange={handleAnswerChange}
            inputType="number"
            inputPlaceholder="Enter decimal"
            instructions={
                <div className="instructions">
                    <p>To convert a fraction to a decimal:</p>
                    <ol>
                        <li>Divide the numerator by the denominator</li>
                        <li>Round your answer to 3 decimal places if needed</li>
                    </ol>
                    <p>Example: 3/4 = 0.75</p>
                </div>
            }
            unitNumber={12}
        />
    );
};

export default ConvertingFractions; 