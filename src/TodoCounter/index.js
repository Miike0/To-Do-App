import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

const urlBackground = require('../img/background-up.jpg');

function TodoCounter() {
    const { totalToDos, completedToDos } = React.useContext(TodoContext);

    return (
        <div className="TodoCounter_container">
            <h2 className="TodoCounter_title">{completedToDos} OF {totalToDos} TO DOs COMPLETED</h2>
            <img src={urlBackground} alt="Background image" className="TodoCounter_img"/>
        </div>

    );
}

export { TodoCounter };