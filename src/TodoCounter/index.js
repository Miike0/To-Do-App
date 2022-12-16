import React from "react";
import './TodoCounter.css';

const urlBackground = require('../img/background-up.jpg');

function TodoCounter({ total, completed }) {
    return (
        <div className="TodoCounter_container">
            <h2 className="TodoCounter_title">{completed} OF {total} TO DOs COMPLETED</h2>
            <img src={urlBackground} alt="Background image" className="TodoCounter_img"/>
        </div>

    );
}

export { TodoCounter };