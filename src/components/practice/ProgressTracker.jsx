import React from 'react';
import '../../css/ProgressTracker.css';

const ProgressTracker = ({ correct, total }) => {
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    return (
        <div className="progress-tracker">
            <div className="progress-stats">
                <div className="stat">
                    <span className="label">Correct:</span>
                    <span className="value">{correct}</span>
                </div>
                <div className="stat">
                    <span className="label">Total:</span>
                    <span className="value">{total}</span>
                </div>
                <div className="stat">
                    <span className="label">Accuracy:</span>
                    <span className="value">{percentage}%</span>
                </div>
            </div>
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressTracker; 