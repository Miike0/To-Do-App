import React from "react";
import IconButton from '@mui/material/IconButton';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import './TodoItem.css';
import { useMediaQuery } from "react-responsive";

function TodoItem(props) {
    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1224px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});

    const onComplete = () => {
        alert('Task completed: ' + props.text);
    };

    const onDelete = () => {
        alert('Task deleted: ' + props.text);
    };

    return (
        <li className={`TodoItem_container ${props.completed ? 'TodoItem-container_completed' : ''}`}>


            <IconButton className={`${(props.completed)? 'Icon-checked_activated' : 'TodoItem_button'}`} fontSize="large" onClick={onComplete}>
           
                    {
                            props.completed ?
                            ((isDesktopOrLapton && <UnpublishedOutlinedIcon sx={{fontSize: 30}} className="TodoItem_button-Checked" disabled/>)
                            || (isMobile && <UnpublishedOutlinedIcon sx={{fontSize: 25}} className="TodoItem_button-Checked" disabled />))
                            :
                            ((isDesktopOrLapton && <TaskAltOutlinedIcon sx={{fontSize: 30}} className="TodoItem_button-Check"/>)
                            || (isMobile && <TaskAltOutlinedIcon sx={{fontSize: 25}} className="TodoItem_button-Check"/>))
                    }
                
                </IconButton>


            {
                props.completed ?
                (<p className="TodoItem_text_completed">{props.text}</p>)
                :
                (<p className="TodoItem_text">{props.text}</p>)
            }
            

            <IconButton className="TodoItem_button" fontSize="large" onClick={onDelete}>
                {
                    props.completed ?
                    ((isDesktopOrLapton && <HighlightOffIcon sx={{fontSize: 30}} className="TodoItem_button-Removed" disabled/>)
                    || (isMobile && <HighlightOffIcon sx={{fontSize: 25}} className="TodoItem_button-Removed" disabled/>))
                    :
                    ((isDesktopOrLapton && <HighlightOffIcon sx={{fontSize: 30}} className="TodoItem_button-Remove"/>)
                    || (isMobile && <HighlightOffIcon sx={{fontSize: 25}} className="TodoItem_button-Remove"/>))
                }

                
            </IconButton>

        </li>
    );
}

export { TodoItem };