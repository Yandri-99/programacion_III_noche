import { useState, type FormEvent } from 'react';

// 1. Exportamos la interfaz para poder usarla en el padre también
export interface SumaData {
  valorA: number;
  valorB: number;
}

interface SumaFormProps {
  onSumar: (data: SumaData) => void;
}

export default function SumaForm(props: SumaFormProps) {
  // Usamos strings iniciales para que los inputs empiecen vacíos
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 2. Convertimos los strings a números antes de enviar
    // Number() convierte el texto a número. Si está vacío devuelve 0.
    props.onSumar({ 
      valorA: Number(inputA), 
      valorB: Number(inputB) 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Número 1: </label>
        <input 
          type="number" 
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Número 2: </label>
        <input 
          type="number" 
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
        />
      </div>

      <button type="submit">Calcular Suma</button>
    </form>
  );
}