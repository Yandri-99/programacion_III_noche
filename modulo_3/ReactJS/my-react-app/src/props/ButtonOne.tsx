interface ButtonOneProps {
  onClick: () => void;
}

export default function ButtonOne(props: ButtonOneProps) {
  return <button onClick={props.onClick}>Haz clic aquí</button>;
}