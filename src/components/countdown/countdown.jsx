import React, { useState, useEffect } from 'react';
import './countdown.css';

const CountdownTimer = ({ countdownTo ,name}) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countDate = new Date(countdownTo).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (timeLeft < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownTo]);

  return (
    <div className="timer">
        <h1>{name}</h1>
      <div className='numbers'>
        <span>{timeLeft.days}</span>
        <div className="smalltext">Days</div>
      </div>
      <div>
        <span>{timeLeft.hours}</span>
        <div className="smalltext">Hours</div>
      </div>
      <div>
        <span>{timeLeft.minutes}</span>
        <div className="smalltext">Minutes</div>
      </div>
      <div>
        <span>{timeLeft.seconds}</span>
        <div className="smalltext">Seconds</div>
      </div>
      
    </div>
    
  );
};

const CountdownWrapper = () => {
  return (
    <div className="countdown-container">
      <CountdownTimer countdownTo="Dec 30, 2024 00:00:00" name="CANSAT" />
      <CountdownTimer countdownTo="Jan 1, 2025 00:00:00" name="Rocketry"/>
    </div>
  );
};

export default CountdownWrapper;
