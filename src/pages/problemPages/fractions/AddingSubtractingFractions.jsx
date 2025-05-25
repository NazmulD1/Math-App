import React, { useState } from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateAddingSubtractingFractionsProblem } from '../../../utils/problemGenerators';

const AddingSubtractingFractions = () => {
    const [numerator, setNumerator] = useState("");
    const [denominator, setDenominator] = useState("");

    const handleSubmit = (userAnswer, correctAnswer) => {
        // Format user's answer as "numerator/denominator"
        const userAnswerStr = `${numerator}/${denominator}`;

        if (userAnswerStr === correctAnswer) {
            return { message: "Correct!", correctAnswer: null };
        } else {
            return {
                message: "Incorrect!",
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

    return (
        <PracticePage
            title="Adding and Subtracting Fractions"
            problemGenerator={generateAddingSubtractingFractionsProblem}
            validateAnswer={handleSubmit}
            backToPath="/freeStudy"
            backToText="Back to Free Study"
            customInput={customInputForm}
            unitNumber={11}
        />
    );
};

export default AddingSubtractingFractions;
