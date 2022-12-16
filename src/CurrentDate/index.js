import React from "react";
import './CurrentDate.css';

function CurrentDate () {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'];
    const current = new Date();
    const date = `${days[current.getDay()-1]} - ${current.getDate()} / ${months[current.getMonth()]} / ${current.getFullYear()}`
    return (
        <div>
            <p className="CurrentDate"> {date} </p>
        </div>

    );

}

export { CurrentDate };