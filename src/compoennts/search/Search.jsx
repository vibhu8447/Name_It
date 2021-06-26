import React from 'react';
import './Search.css';
function Search(props) {
    return (
        <div className="search-container">
            <input
                onChange={(event) => {
                    props.input(event);
                }}
                placeholder="Type Here!"
                className="Search-input"
                type="text"
            ></input>
        </div>
    );
}

export default Search;
