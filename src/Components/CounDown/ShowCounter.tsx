
import { DateTimeDisplay } from "./DateTimeDisplay";


export const ShowCounter = (props: { days: number, hours: number, minutes: number, seconds: number }) => {
  return (
    <div
      className="show-counter"
      style={{ display: "flex", paddingLeft: 100, paddingTop: 100 }}
    >
      <DateTimeDisplay style={{ padding: 5 }} value={props.days} type={"Days"} />

      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay style={{ padding: 5 }} value={props.hours} type={"Hours"} />
      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay style={{ padding: 5 }} value={props.minutes} type={"Mins"} />
      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay
        style={{ padding: 5 }}
        value={props.seconds}
        type={"Seconds"}
      />
    </div>
  );
};
