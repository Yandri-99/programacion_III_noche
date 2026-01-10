interface InputNotifierProps {
  // La función recibe el texto (string), no el evento completo
  onChangeText: (text: string) => void;
}

export default function InputNotifier(props: InputNotifierProps) {
  return (
    <input 
      type="text" 
      onChange={(e) => props.onChangeText(e.target.value)} 
    />
  );
}