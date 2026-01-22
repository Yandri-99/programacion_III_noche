type Props = {
    hours: number[];
    setHours: React.Dispatch<React.SetStateAction<number[]>>;
}


export function WorkDays(
    {hours, setHours}:Props
) {
    const days = ["Lun", "Mar", "Mie", "Jue", "Vie"];


    const changeHour = (i: number, value: string) => {
        const hour = Number(value) || 0;
        setHours((prev) =>
            prev.map((v, idx) => (idx === i ? hour : v))
        );
    }
    return (
        <section>
            <h2>Horas trabajadas</h2>
            {days.map((d,i)=>
            (
                <div key={(d)}>
                    {d}:{" "}
                    <input
                    type="number"
                    min={0}
                    value={hours[i]}
                    onChange={(e)=>changeHour(i,e.target.value)}
                    />
                </div>
            )
            )}
        </section>
    )
}
