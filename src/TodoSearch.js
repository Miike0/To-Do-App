import React from "react";
import './TodoSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from "react-responsive";




function TodoSearch() {

    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1224px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});
    return (
        <div className="TodoSearch_container">
            <input className="TodoSearch_input" placeholder="Search Task"/>
            {isDesktopOrLapton &&  <SearchIcon className="TodoSearch_icon" sx={{fontSize: 50}}/>}
            {isMobile &&  <SearchIcon className="TodoSearch_icon" sx={{fontSize: 30}}/>}

        </div>

    );
}

export { TodoSearch };