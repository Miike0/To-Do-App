import React from "react";
import './TodoSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from "react-responsive";




function TodoSearch({ searchValue, setSearchValue }) {

    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="TodoSearch_container">
            <input className="TodoSearch_input" placeholder="Search Task" value={searchValue} onChange={onSearchValueChange}/>
            {isDesktopOrLapton &&  <SearchIcon className="TodoSearch_icon" sx={{fontSize: 50}}/>}
            {isMobile &&  <SearchIcon className="TodoSearch_icon" sx={{fontSize: 30}}/>}

        </div>

    );
}

export { TodoSearch };