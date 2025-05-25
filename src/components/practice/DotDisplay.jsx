import React from 'react';
import '../../css/DotDisplay.css';

function DotDisplay({ dots, rows, cols }) {
    return (
        <div 
            className="dot-grid"
            style={{
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gridTemplateColumns: `repeat(${cols}, 1fr)`
            }}
        >
            {dots.map(dot => (
                <div key={dot.id} className="dot" />
            ))}
        </div>
    );
}

export default DotDisplay; 