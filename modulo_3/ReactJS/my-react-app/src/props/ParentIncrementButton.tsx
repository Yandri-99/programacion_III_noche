import { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function ParentIncrementButton() {
  // TypeScript infiere automáticamente que es un 'number' por el 0.
  // Pero puedes ser explícito así: useState<number>(0)
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <p>Contador: {count}</p>
      {/* TypeScript valida que 'increment' coincida con la firma () => void */}
      <IncrementButton onIncrement={increment} />
    </>
  );
}