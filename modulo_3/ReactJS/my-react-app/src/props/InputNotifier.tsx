
interface InputNotifierProps {
  onChangeText: (text: string) => void;
}

export default function InputNotifier({ onChangeText }: InputNotifierProps) {
  return (
    <input 
      type="text" 
      onChange={(e) => onChangeText(e.target.value)} 
    />
  );
}