import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../search/Search';
import ResultContainer from './../ResultContainer/ResultContainer';
const name = require('@rstacruz/startup-name-generator');
function App(props) {
    const [expand, setexpand] = useState(true);
    const [segestedname, setsegestedname] = useState([]);
    const handleinputchange = (event) => {
        setexpand(false);
        console.log(event.target.value);
        setsegestedname(name(event.target.value));
        console.log(segestedname);
        if (event.target.value === '') {
            setexpand(true);
            setsegestedname([]);
        }
    };

    return (
        <div>
            <Header expand={expand}></Header>
            <Search input={handleinputchange}></Search>
            <ResultContainer segestedname={segestedname}></ResultContainer>
        </div>
    );
}

export default App;
