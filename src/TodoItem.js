import React from "react";
import IconButton from '@mui/material/IconButton';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem_container">


            <IconButton className={`${(props.completed)? 'Icon-checked_activated' : 'TodoItem_button'}`} fontSize="large">
           
                    {
                            props.completed ? 
                            (<UnpublishedOutlinedIcon sx={{fontSize: 30}} className="TodoItem_button-Checked" />)
                            :
                            (<TaskAltOutlinedIcon sx={{fontSize: 30}} className="TodoItem_button-Check" />)
                    }
                
                </IconButton>


            {
                props.completed ?
                (<p className="TodoItem_text_completed">{props.text}</p>)
                :
                (<p className="TodoItem_text">{props.text}</p>)
            }
            

            <IconButton className="TodoItem_button" fontSize="large">
                {
                    props.completed ?
                    (<HighlightOffIcon sx={{fontSize: 30}} className="TodoItem_button-Removed"/>)
                    :
                    (<HighlightOffIcon sx={{fontSize: 30}} className="TodoItem_button-Remove"/>)
                }

                
            </IconButton>

        </li>
    );
}

export { TodoItem };