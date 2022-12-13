import React from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <IconButton className="CreateTodoButton" fontSize="large"><AddCircleIcon className="CreateTodoButton_icon" sx={{fontSize: 60}}/></IconButton>
    );
}

export { CreateTodoButton };