import React, { useState } from 'react';
import './Header.css';
function Header(props) {
    return (
        <div className="head-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${
                    props.expand
                        ? `head-image-expanded`
                        : `head-image-contracted`
                }`}
                alt="header-img"
            ></img>
            <h1 classname="head-text"> Name It</h1>
        </div>
    );
}

export default Header;

// ../Header/Header
