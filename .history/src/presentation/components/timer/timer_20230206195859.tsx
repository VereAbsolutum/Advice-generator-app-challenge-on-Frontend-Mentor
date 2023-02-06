import React, { useEffect, useState } from 'react'

const timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [seconds]);

    return(
    <div className="timer">
        <div id="minutes">00</div>
        <div className="timer-separator">:</div>
        <div id="seconds">00</div>
    </div>
    )
}

export default timer