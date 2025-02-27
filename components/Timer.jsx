"use client";
import React, { useEffect, useState } from "react";

const Timer = ({ event }) => {
  //calculate the target event date and time
  const eventDate = new Date(`${event.date}T${event.hour}`);
  // console.log(eventDate);

  // state to tract the remaining time in miliseconds
  const [timeRemaining, setTimeRemaining] = useState(eventDate - new Date());
  // console.log(timeRemaining);

  // handle the countdown logic
  useEffect(() => {
    //set up an interval that updates every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = eventDate - now;

      // it the time is up ,clear the interval and stop the countdown
      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000); // runs every 1000 miliseconds(1second)
    //cleanup function to clear the interval when component unmount
    return () => clearInterval(interval);
  }, [eventDate]); // dependency array ensures the effect only rund when 'eventDate' changes

  // if the countdown is ended, display a message
  if (timeRemaining <= 0) {
    return <div>The event has already passed</div>;
  }
  //calculate the remaining days,hour,minute and seconds from 'timeRemaining'
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  // console.log(days, hours, minutes, seconds);

  return (
    <div className="flex flex-wrap gap-4">
      {/* days */}
      <div className="text-center border-[3px] border-accent rounded-full size-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{days}</div>
          <div className="text-sm uppercase font-medium">Days</div>
        </div>
      </div>
      {/* days */}
      <div className="text-center border-[3px] border-accent rounded-full size-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{hours}</div>
          <div className="text-sm uppercase font-medium">Hours</div>
        </div>
      </div>
      {/* days */}
      <div className="text-center border-[3px] border-accent rounded-full size-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{minutes}</div>
          <div className="text-sm uppercase font-medium">Minutes</div>
        </div>
      </div>
      {/* days */}
      <div className="text-center border-[3px] border-accent rounded-full size-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{seconds}</div>
          <div className="text-sm uppercase font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
