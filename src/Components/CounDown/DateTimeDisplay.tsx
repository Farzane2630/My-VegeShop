interface style {
  display ?: string
  paddingLeft ?: number
  paddingTop ?: number
  padding ?: number
}

export const DateTimeDisplay = (props: { value: number, type: string , style?: style }) => {
  return (
    <div className='countdown'>
      <p>{props.value}</p>
      <span>{props.type}</span>
    </div>
  );
};

