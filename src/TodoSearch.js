import React from "react";
import './TodoSearch.css';
import SearchIcon from '@mui/icons-material/Search';

function TodoSearch() {
    return (
        <div className="TodoSearch_container">
            <input className="TodoSearch_input" placeholder="Search Task"/>
            <SearchIcon className="TodoSearch_icon" sx={{fontSize: 50}}/>

        </div>

    );
}

export { TodoSearch };