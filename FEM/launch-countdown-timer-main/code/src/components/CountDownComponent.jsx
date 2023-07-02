import React, { useState, useEffect, useRef } from "react";
import Item from "./Item.jsx";

const CountDownComponent = () => {
  const [countdown, setCountdown] = useState({
    days: "14",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const intervalRef = useRef();

  const calculateCountdown = () => {
    const countdownDate = Date.now() + 14 * 24 * 60 * 60 * 1000; // Set the countdown date to current time + 14 days in milliseconds
    intervalRef.current = setInterval(() => {
      const now = new Date().getTime(); // Get the current time
      const distance = countdownDate - now; // Calculate the remaining time in milliseconds

      if (distance < 0) {
        // Check if the countdown has reached zero
        clearInterval(intervalRef.current); // If so, clear the interval to stop the countdown
      } else {
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24)); // Calculate the remaining days
        const remainingHours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Calculate the remaining hours
        const remainingMinutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ); // Calculate the remaining minutes
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate the remaining seconds

        setCountdown({
          // Update the countdown state with the remaining time values
          days: remainingDays.toString().padStart(2, "0"), // Pad the days value with leading zeros if necessary
          hours: remainingHours.toString().padStart(2, "0"), // Pad the hours value with leading zeros if necessary
          minutes: remainingMinutes.toString().padStart(2, "0"), // Pad the minutes value with leading zeros if necessary
          seconds: remainingSeconds.toString().padStart(2, "0"), // Pad the seconds value with leading zeros if necessary
        });
      }
    }, 1000); // Run the countdown update every second
  };

  useEffect(() => {
    calculateCountdown(); // Start the countdown immediately when the component is rendered

    return () => {
      clearInterval(intervalRef.current); // Clean up the interval when the component is unmounted
    };
  }, []);

  return (
    <section>
      <div className="heading">
        <h1>We're launching soon</h1>
      </div>

      <div className="count-down_container">
        <Item value={countdown.days} title="Days" />
        <Item value={countdown.hours} title="Hours" />
        <Item value={countdown.minutes} title="Minutes" />
        <Item value={countdown.seconds} title="Seconds" />
      </div>
    </section>
  );
};

export default CountDownComponent;
