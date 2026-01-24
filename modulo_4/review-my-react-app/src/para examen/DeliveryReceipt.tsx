type Props = { data: { subtotal: number; shipping: number; total: number } };

export default function DeliveryReceipt({ data }: Props) {
  if (data.total === 0 && data.subtotal === 0) return null;
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 15 }}>
      <p>Subtotal: ${data.subtotal}</p>
      <p>Envío: ${data.shipping} {data.shipping === 0 && "(¡Gratis!)"}</p>
      <hr />
      <h3>Total: ${data.total}</h3>
    </div>
  );
}