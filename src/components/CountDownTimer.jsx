import { useState, useEffect } from "preact/hooks";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <h2>It's Our Wedding Day!✨</h2>
      ) : (
        <div class="countDown">
          <div class="days">{timeLeft.days}d</div>
          <div class="hours">{timeLeft.hours}h</div>
          <div class="minutes">{timeLeft.minutes}m </div>
          <div class="seconds">{timeLeft.seconds}s</div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
