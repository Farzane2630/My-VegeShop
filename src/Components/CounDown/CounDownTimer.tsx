import { useCountdown } from "../../Hooks/useCountDown";
import { ShowCounter } from "./ShowCounter";

export const CountdownTimer = (props:{ targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(props.targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};
