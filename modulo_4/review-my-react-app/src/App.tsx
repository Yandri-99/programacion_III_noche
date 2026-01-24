/*import { UseStateInput } from "./components/UseStateInput";
import { UseStateSuma } from "./components/UseStateSuma";
import { UserMultiplicacion } from "./components/UseRefMultiplica";
import { UseStatePriceTax } from "./components/UseRefPriceTax";
import { UseMemoAreaTriangulo } from "./components/UseMemoAreaTriangulo";
import { UseCallbackAreaTriangulo } from "./components/UseCallbackAreaTriangulo";
import { WorkDays } from "./examen/WorkDays";
import { PayrollSummary } from "./examen/PayrollSummary";

function App() {
  return (
    <div>
      <UseStateInput />
      <UseStateSuma />
      <UserMultiplicacion />
      <UseStatePriceTax />
      <UseMemoAreaTriangulo />
      <UseCallbackAreaTriangulo />
      <WorkDays/>
      <PayrollSummary/>
    </div>
  );
}
*/

import { useCallback, useState } from "react";
import ProductList from './para examen/Ejercicio_1_Delivery_Order_useState_useCallback/ProductList';
import DeliveryReceipt from "./para examen/DeliveryReceipt";

export type Product = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function App() {
  // 1. Estado de productos
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Hamburguesa", price: 5, qty: 1 },
    { id: 2, name: "Papas", price: 3, qty: 0 },
    { id: 3, name: "Refresco", price: 1.5, qty: 0 },
  ]);

  // 2. Estados de los selects
  const [zone, setZone] = useState("Cerca"); // "Cerca" | "Lejos"
  const [type, setType] = useState("Normal"); // "Normal" | "Express"

  const [totals, setTotals] = useState({ subtotal: 0, shipping: 0, total: 0 });

  // 3. useCallback: Memoriza la función. Solo cambia si productos, zona o tipo cambian.
  const calculateTotal = useCallback(() => {
    // A. Subtotal (reduce)
    const subtotal = products.reduce((acc, p) => acc + (p.price * p.qty), 0);

    // B. Envío base
    let shipping = zone === "Cerca" ? 2 : 4;

    // C. Extra Express
    if (type === "Express") shipping += 3;

    // D. Envío Gratis (Regla final)
    if (subtotal >= 20) shipping = 0;

    setTotals({ subtotal, shipping, total: subtotal + shipping });
  }, [products, zone, type]);

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h1>Examen Delivery</h1>
      <ProductList 
        products={products} 
        setProducts={setProducts} 
        zone={zone} setZone={setZone}
        type={type} setType={setType}
      />
      
      <button onClick={calculateTotal} style={{ marginTop: 15 }}>
        Calcular Total
      </button>

      <DeliveryReceipt data={totals} />
    </div>
  );
}