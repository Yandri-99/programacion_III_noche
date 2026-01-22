import {useState} from "react";

export const UseStateSuma = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const suma = number1 + number2;

    return (
        <div style={{ padding: 12, border: "1px solid @ddd", marginBottom: 12 }}>
            <h3> Suma de dos numeros</h3>
            <input
                value={number1}
                placeholder="Escriba texto"
                onChange={(e) => setNumber1(Number(e.target.value))}
            
            />
            <input
                value={number2}
                placeholder="Escriba texto"
                onChange={(e) => setNumber2(Number(e.target.value))}
            
            />

        <p> la suma es: {suma}</p>
        </div>
    )

}