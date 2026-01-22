import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseStateInput } from './components/UseStateInput'
import { UseStateSuma } from './components/UseStateSuma'
import { UserMultiplicacion } from './components/UseRefMultiplica'
import { UseStatePriceTax } from './components/UseRefPriceTax'
import { UseMemoAreaTriangulo } from './components/UseMemoAreaTriangulo'
import { UseCallbackAreaTriangulo } from './components/UseCallbackAreaTriangulo'
import { WorkDays } from './examen/WorkDays'
import { PayrollSummary } from './examen/PayrollSummary'

const App = () => {
  const [hours, setHours] = useState<number[]>([0, 0, 0, 0, 0]);
  
  return (
  <StrictMode>
    <UseStateInput />
    <UseStateSuma />
    <UserMultiplicacion />
    <UseStatePriceTax />
    <UseMemoAreaTriangulo />
    <UseCallbackAreaTriangulo />
    <WorkDays hours={hours} setHours={setHours} />
    <PayrollSummary hours={hours} />
  </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />)
