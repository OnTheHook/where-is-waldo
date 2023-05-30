import { useEffect, useState } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval
    if (timer < 120000) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  });

  return <span>{Math.floor((timer/60000) % 60)}:{Math.floor((timer/1000) % 60)}</span>;
};

export default Timer;
