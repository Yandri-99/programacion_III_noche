import { Product } from "../App";

type Props = {
  products: Product[];
  setProducts: (p: Product[]) => void;
  zone: string; setZone: (z: string) => void;
  type: string; setType: (t: string) => void;
};

export default function ProductList({ products, setProducts, zone, setZone, type, setType }: Props) {
  
  const changeQty = (id: number, val: string) => {
    const q = Math.max(0, Number(val));
    setProducts(products.map(p => p.id === id ? { ...p, qty: q } : p));
  };

  return (
    <section>
      <h3>Productos & Envío</h3>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: 5 }}>
          <span style={{ display: "inline-block", width: 120 }}>{p.name} (${p.price})</span>
          <input 
            type="number" min="0" value={p.qty} 
            onChange={(e) => changeQty(p.id, e.target.value)} 
            style={{ width: 60 }} 
          />
        </div>
      ))}

      <div style={{ marginTop: 15 }}>
        <label>Zona: </label>
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          <option value="Cerca">Cerca ($2)</option>
          <option value="Lejos">Lejos ($4)</option>
        </select>
        
        <label style={{ marginLeft: 15 }}>Tipo: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Normal">Normal</option>
          <option value="Express">Express (+$3)</option>
        </select>
      </div>
    </section>
  );
}