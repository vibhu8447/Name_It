import React from 'react';
import './NameCard.css';
function NameCard({ suggest }) {
    const nameurl =
        'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a className="card-link" target="_" href={`${nameurl}${suggest}`}>
            <div className="result-name-card">
                <p className="result-name">{suggest} </p>
            </div>
        </a>
    );
}

export default NameCard;
