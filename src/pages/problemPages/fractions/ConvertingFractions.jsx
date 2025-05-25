import React, { useState } from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateConvertingFractionsProblem } from '../../../utils/problemGenerators';

const ConvertingFractions = () => {
    const [wholeNumber, setWholeNumber] = useState("");
    const [numerator, setNumerator] = useState("");
    const [denominator, setDenominator] = useState("");

    const handleSubmit = (userAnswer, correctAnswer) => {
        let userAnswerStr;
        
        // If the question is converting to mixed number
        if (correctAnswer.includes(" ")) {
            // Format user's answer as "whole numerator/denominator"
            userAnswerStr = `${wholeNumber} ${numerator}/${denominator}`;
        } else {
            // Format user's answer as "numerator/denominator"
            userAnswerStr = `${numerator}/${denominator}`;
        }

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
            <div className="mixed-number-input">
                <input
                    type="number"
                    value={wholeNumber}
                    onChange={(e) => setWholeNumber(e.target.value)}
                    placeholder="Whole"
                    min="0"
                />
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
        </div>
    );

    return (
        <PracticePage
            title="Converting Fractions"
            problemGenerator={generateConvertingFractionsProblem}
            validateAnswer={handleSubmit}
            backToPath="/freeStudy"
            backToText="Back to Free Study"
            customInput={customInputForm}
            unitNumber={11}
        />
    );
};

export default ConvertingFractions;
