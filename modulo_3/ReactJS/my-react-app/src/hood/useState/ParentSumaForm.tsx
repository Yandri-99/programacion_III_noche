import { useState } from 'react';
// Importamos el componente Y la interfaz que definimos en el hijo
import SumaForm, { type SumaData } from './SumaForm';

export default function ParentSumaForm() {
  // El estado puede ser number o null (si aún no hay suma)
  const [resultado, setResultado] = useState<number | null>(null);

  const handleSuma = (data: SumaData) => {
    // Aquí recibimos valorA y valorB ya como números
    const total = data.valorA + data.valorB;
    setResultado(total);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calculadora de Suma</h2>
      
      <SumaForm onSumar={handleSuma} />
      
      {/* Mostramos el resultado solo si no es null */}
      {resultado !== null && (
        <h3>Resultado: {resultado}</h3>
      )}
    </div>
  );
}