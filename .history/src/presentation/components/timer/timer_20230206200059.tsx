import React, { useEffect, useState } from 'react'

const timer: React.FC = () => {
    const [seconds, setSeconds] = useState(2000);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1);
      return () => clearInterval(interval);
    }, [seconds]);

    return(
    <div className="timer">
        <div id="seconds">{seconds}</div>
    </div>
    )
}

export default timer