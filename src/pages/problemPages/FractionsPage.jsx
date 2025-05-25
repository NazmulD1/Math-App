import React, { useState } from 'react';
import ComparingFractions from './fractions/ComparingFractions';
import ReducingFractions from './fractions/ReducingFractions';
import ConvertingFractions from './fractions/ConvertingFractions';
import AddingSubtractingFractions from './fractions/AddingSubtractingFractions';
import MultiplyingDividingFractions from './fractions/MultiplyingDividingFractions';
import FindingLowestCommonDenominator from './fractions/FindingLowestCommonDenominator';

const FractionsPage = () => {
    const [selectedComponent, setSelectedComponent] = useState('ComparingFractions');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'ComparingFractions':
                return <ComparingFractions />;
            case 'FindingLowestCommonDenominator':
                return <FindingLowestCommonDenominator />;
            case 'ReducingFractions':
                return <ReducingFractions />;
            case 'ConvertingFractions':
                return <ConvertingFractions />;
            case 'AddingSubtractingFractions':
                return <AddingSubtractingFractions />;
            case 'MultiplyingDividingFractions':
                return <MultiplyingDividingFractions />;
            default:
                return <ComparingFractions />;
        }
    };

    return (
        <div>
            <h1>Fractions Practice</h1>
            <select onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
                <option value="ComparingFractions">Comparing Fractions</option>
                <option value="FindingLowestCommonDenominator">Finding Lowest Common Denominator</option>
                <option value="ReducingFractions">Reducing Fractions</option>
                <option value="ConvertingFractions">Converting Improper Fractions to Mixed and vice versa</option>
                <option value="AddingSubtractingFractions">Adding and Subtracting Fractions</option>
                <option value="MultiplyingDividingFractions">Multiplying and Dividing Fractions</option>
            </select>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
};

export default FractionsPage;
