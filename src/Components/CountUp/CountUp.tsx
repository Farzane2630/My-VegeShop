

export default function CountUp(props: { end: number, duration: number, desc?: string }) {
  return (
    <div className="count-up-wrapper">
      <CountUp end={props.end} duration={props.duration} />
      <span className="count-up-desc">{props.desc}</span>
    </div>
  );
}
