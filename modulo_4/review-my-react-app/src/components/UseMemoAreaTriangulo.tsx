import { useMemo, useState } from "react";

export const UseMemoAreaTriangulo = () => {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);

    const area = useMemo(() => {
        console.log("Calculando área...");
        return (base * altura) / 2;
    }, [base, altura]);

    return (
        <div style={{ padding: 12, border: "1px solid #ddd", marginBottom: 12 }}>
            <h3>Área de un triángulo</h3>

            <input
                type="number"
                value={base}
                placeholder="escriba base"
                onChange={(e) => setBase(Number(e.target.value))}
            />

            <input
                type="number"
                value={altura}
                placeholder="escriba altura"
                onChange={(e) => setAltura(Number(e.target.value))}
            />

            <p>Área del triángulo: {area || 0}</p>
        </div>
    );
};