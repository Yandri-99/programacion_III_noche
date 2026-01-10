import { useState } from "react";
import InputNotifier from "./InputNotifier";

export default function ParentInputNotifier() {
  // TypeScript infiere que el estado es 'string' por el valor inicial "".
  // Explícitamente sería: useState<string>("")
  const [text, setText] = useState<string>("");

  return (
    <>
      {/* Aquí ocurre la magia de tipos:
        'InputNotifier' espera una función: (text: string) => void
        'setText' es una función que acepta un string y actualiza el estado.
        Por eso podemos pasarla directamente.
      */}
      <InputNotifier onChangeText={setText} />
      <p>Texto: {text}</p>
    </>
  );
}