import React from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateReducingFractionsProblem } from '../../../utils/problemGenerators';
import { validateAnswer } from '../../../utils/answerValidators';

const ReducingFractions = () => {
    return (
        <PracticePage
            title="Reducing Fractions"
            problemGenerator={generateReducingFractionsProblem}
            validateAnswer={validateAnswer}
            backToPath="/freeStudy"
            backToText="Back to Free Study"
            inputType="text"
            unitNumber={11}
        />
    );
};

export default ReducingFractions;
