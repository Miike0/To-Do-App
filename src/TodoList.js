import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList_container">
            <ul className="TodoList_List">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };