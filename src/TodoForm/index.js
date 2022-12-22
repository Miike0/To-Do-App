import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const value = React.useContext(TodoContext);

    const onCancel = () => {
        value.setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (newToDoValue.length > 0) {
            value.addToDo(newToDoValue);
            value.setOpenModal(false); 
        }
         
    };
    const onChangeValue = (event) =>{
        setNewToDoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="ToDoForm">
            <label className="ToDoForm-label">ADD A NEW TO DO</label>
            <textarea
                value={newToDoValue}
                onChange={onChangeValue}
                className="ToDoForm-input"
                placeholder="The task for today is..."
            />
            <div className="ToDoForm-buttonsContainer">
                <button
                    type="button"
                    className="ToDoForm-buttonsContainer_Cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                
                <button
                    type="submit"
                    className="ToDoForm-buttonsContainer_Add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };