interface IncrementButtonProps {
  onIncrement: () => void;
}

export default function IncrementButton(props: IncrementButtonProps) {
  return <button onClick={props.onIncrement}>Sumar 1</button>;
}