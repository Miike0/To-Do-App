import React from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './CreateTodoButton.css';
import { useMediaQuery } from "react-responsive";


function CreateTodoButton() {
    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});

    const onClickButton = (msg) => {
        alert(msg);
    }
    return (
        <div>
            {isDesktopOrLapton && <IconButton className="CreateTodoButton" fontSize="large" 
            onClick={() => onClickButton('Prueba de msg')}>
                <AddCircleIcon className="CreateTodoButton_icon" sx={{fontSize: 60}}/>
                </IconButton>}
            {isMobile && <IconButton className="CreateTodoButton" fontSize="large">
                <AddCircleIcon className="CreateTodoButton_icon" sx={{fontSize: 40}}/>
                </IconButton>}
        </div>
    );
}

export { CreateTodoButton };