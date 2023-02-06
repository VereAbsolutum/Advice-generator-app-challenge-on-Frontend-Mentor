import React from 'react'

const timer: React.FC = () => {
    return(
    <div className="timer">
        <div id="minutes">00</div>
        <div className="timer-separator">:</div>
        <div id="seconds">00</div>
    </div>
    )
}

export default timer