import { useState, useRef } from "react";

export function UserMultiplicacion() {
    const numbrerRef = useRef<HTMLInputElement>(null);
    const numbre2Ref = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const number1 = Number(numbrerRef.current?.value);
        const number2 = Number(numbre2Ref.current?.value);
        setResult(number1 * number2);
    };

    return (
        <div style={{ padding: 12, border: "1px solid #dddd", marginBottom: 12 }}>
            <h3>Multiplicación de dos números</h3>

            <input
                ref={numbrerRef}
                type="number"
                placeholder="Escriba numero 1"
            />

            <input
                ref={numbre2Ref}
                type="number"
                placeholder="Escriba numero 2"
            />

            <button onClick={calculate}>Multiplicar</button>

            <p>RESULTADO: {result ?? "0"}</p>
        </div>
    );
}