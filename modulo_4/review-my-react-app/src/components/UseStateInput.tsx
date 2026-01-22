import {useState} from "react";

export function UseStateInput(){
    const [texto, setTexto] = useState('');

    return (
        <div style={{padding: 12, border: "1px solid @add",marginBottom:12}}>
            <h3>use State Input - Texto</h3>
            <input
                 value={texto}
                 placeholder="Ingrese un texto"
                 onChange={(e) => setTexto(e.target.value)}
            />
        </div>
    )
}