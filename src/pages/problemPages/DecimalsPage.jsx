import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/DecimalsPage.css';
import ConvertingFractions from './decimals/ConvertingFractions';
import DecimalArithmetic from './decimals/DecimalArithmetic';

const DecimalsPage = () => {
    const [selectedComponent, setSelectedComponent] = useState('ConvertingFractions');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'ConvertingFractions':
                return <ConvertingFractions />;
            case 'DecimalArithmetic':
                return <DecimalArithmetic />;
            default:
                return <ConvertingFractions />;
        }
    };

    return (
        <div>
            <h1>Decimals Practice</h1>
            <select onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
                <option value="ConvertingFractions">Converting Fractions to Decimals</option>
                <option value="DecimalArithmetic">Basic Arithmetic with Decimals</option>
            </select>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
};

export default DecimalsPage; 