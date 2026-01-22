import { useState, useCallback } from "react";

export function UseCallbackAreaTriangulo(){
    const [base, setBase] = useState(0); 
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculate = useCallback (() => {
        console.log("Calculando total");
        setResultado( base * altura / 2);
    }, [base, altura]);

    return (
        <div style={{ padding: 12, border: "1px solid #ddd", marginBottom: 12 }}>
            {/* Corregimos el título para que sea descriptivo */}
            <h3>Cálculo de Precio con IVA</h3>
            <input
                placeholder="Base"
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
            />
            <input
                placeholder="Altura"
                value={altura}
                onChange={(e) => setAltura(Number(e.target.value))}
            />
            <button onClick={calculate}/>
            
            <p>Area del triangulo: {resultado || '0'}</p>
        </div>
    );
}