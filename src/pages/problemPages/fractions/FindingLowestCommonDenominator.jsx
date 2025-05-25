import React from 'react';
import PracticePage from '../../../components/practice/PracticePage';
import { generateLowestCommonDenominatorProblem } from '../../../utils/problemGenerators';
import { validateAnswer } from '../../../utils/answerValidators';

const FindingLowestCommonDenominator = () => {
    return (
        <PracticePage
            title="Find the Lowest Common Denominator"
            problemGenerator={generateLowestCommonDenominatorProblem}
            validateAnswer={validateAnswer}
            backToPath="/freeStudy"
            backToText="Back to Free Study"
            inputType="text"
            unitNumber={11}
        />
    );
};

export default FindingLowestCommonDenominator;
