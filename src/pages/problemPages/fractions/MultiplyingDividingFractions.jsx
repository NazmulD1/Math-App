import React, { useState } from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateMultiplyingDividingFractionsProblem } from '../../../utils/problemGenerators';

const MultiplyingDividingFractions = () => {
    const [numerator, setNumerator] = useState("");
    const [denominator, setDenominator] = useState("");
    const [currentProblem, setCurrentProblem] = useState(null);

    const handleSubmit = (userAnswer, correctAnswer) => {
        // Format user's answer as "numerator/denominator"
        const userAnswerStr = `${numerator}/${denominator}`;

        if (userAnswerStr === correctAnswer) {
            return { message: "Correct!", correctAnswer: null };
        } else {
            return {
                message: "Incorrect! Remember to reduce your answer to simplest form.",
                correctAnswer: correctAnswer
            };
        }
    };

    const customInputForm = (
        <div className="fraction-input">
            <div className="fraction">
                <input
                    type="number"
                    value={numerator}
                    onChange={(e) => setNumerator(e.target.value)}
                    placeholder="Numerator"
                    min="0"
                />
                <div className="fraction-line"></div>
                <input
                    type="number"
                    value={denominator}
                    onChange={(e) => setDenominator(e.target.value)}
                    placeholder="Denominator"
                    min="1"
                />
            </div>
        </div>
    );

    const handleNewProblem = (problem) => {
        setCurrentProblem(problem);
        setNumerator("");
        setDenominator("");
    };

    return (
        <PracticePage
            title="Multiplying and Dividing Fractions"
            problemGenerator={generateMultiplyingDividingFractionsProblem}
            validateAnswer={handleSubmit}
            backToPath="/freeStudy"
            backToText="Back to Free Study"
            customInput={customInputForm}
            onNewProblem={handleNewProblem}
            instructions={
                <div className="instructions">
                    <p>To multiply fractions:</p>
                    <ol>
                        <li>Multiply the numerators</li>
                        <li>Multiply the denominators</li>
                        <li>Reduce the answer to simplest form</li>
                    </ol>
                    <p>To divide fractions:</p>
                    <ol>
                        <li>Flip the second fraction (find its reciprocal)</li>
                        <li>Multiply the numerators</li>
                        <li>Multiply the denominators</li>
                        <li>Reduce the answer to simplest form</li>
                    </ol>
                    <p>Remember: Always reduce your final answer to simplest form by dividing both the numerator and denominator by their greatest common factor!</p>
                </div>
            }
            unitNumber={11}
        />
    );
};

export default MultiplyingDividingFractions;
