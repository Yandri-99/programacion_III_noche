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

import {useMemo, useState} from "react"

function App() {
  const [hours, setHours] = useState<number[]>({0,0,0,0,0});
  const rate=5;
  const payroll = useMemo(() => {
    const totalHours = hours.reduce((acc, curr) => acc + curr, 0);
    const totalPay = totalHours * rate;
    return {totalHours, totalPay};
  }, [hours]);
}