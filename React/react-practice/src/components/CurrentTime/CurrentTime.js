import React, { useState } from 'react';

export default function CurrentTime() {
    const [clickedTime, setClickedTime] = useState();
    const [currentTime, setCurrentTime] = useState();

    const handleClickedTime = () => {
        setClickedTime(new Date().toLocaleString());
    };

    const handleUpdateTime = () => {
        // Using setInterval to update time every second
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Current Time is {currentTime}</h1>
            <button onClick={handleUpdateTime}>Current Time</button>
            <h1>Clicked Time is {clickedTime}</h1>
            <button onClick={handleClickedTime}>Clicked Time</button>

        </div>
    );
}
