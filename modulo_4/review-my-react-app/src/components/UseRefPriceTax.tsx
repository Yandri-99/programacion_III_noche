import { useState, useRef } from "react";

export const UseStatePriceTax = () => {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const taxRef = useRef<HTMLSelectElement | null>(null);
    const [total, setTotal] = useState(0);

    const calculate = () => {
        const price = Number(priceRef.current?.value) || 0;
        const tax = Number(taxRef.current?.value) || 0;

        setTotal(price + price * tax);
    };

    return (
        <div style={{ padding: 12, border: "1px solid #ddd", marginBottom: 12 }}>
            <h3>Precio con impuesto</h3>

            <input
                ref={priceRef}
                type="number"
                placeholder="price"
            />

            <select ref={taxRef}>
                <option value="0">Sin IVA</option>
                <option value="0.12">12%</option>
                <option value="0.15">15%</option>
            </select>

            <button onClick={calculate}>Calcular</button>

            <p>Resultado: {total.toFixed(2)}</p>
        </div>
    );
};