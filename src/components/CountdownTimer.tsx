import React, { useState, useEffect } from "react";
import { styleText } from "util";

const CountdownTimer: React.FC = () => {
  // The end time (provided timestamp) in seconds
  const endTime = 1733879879;

  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    const timeLeft = endTime - currentTime; // Difference between end time and current time

    // If the time has expired, return 0
    if (timeLeft <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    // Calculate hours, minutes, and seconds remaining
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return { hours, minutes, seconds };
  };

  // State to hold the countdown
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Recalculate every second
    }, 1000);

    // Clean up interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fg-white"
      style={{
      position: "fixed",
      top: 50,
      width: "100%",
      color: "#fff",
      textAlign: "center",
      padding: "10px 0",
      zIndex: 1000, // Ensures it stays on top of other elements
    }}
    >
      <h2>
        {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h2>
    </div>
  );
};

export default CountdownTimer;
