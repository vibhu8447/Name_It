import React from 'react';
import './ResultContainer.css';
import NameCard from './../Namecard/NameCard';
function ResultContainer({ segestedname }) {
    const suggestedjsx = segestedname.map((suggest) => {
        return <NameCard key={suggest} suggest={suggest} />;
    });
    return (
        <div className="result-conatiner">
            {suggestedjsx}
        </div>
    );
}

export default ResultContainer;
