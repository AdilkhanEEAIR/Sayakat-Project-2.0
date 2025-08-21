import { useEffect } from "react";
import { useCart } from "../store/cart.js";
export default function CartPage() {
  const cart = useCart();
  const items = cart.items;
  useEffect(() => {
    document.title = "SAYAKAT — Cart";
  }, []);

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <div className="card">
        <h2>Cart</h2>
        {items.length === 0 && (
          <p style={{ color: "var(--muted)" }}>Your cart is empty.</p>
        )}
        {items.map((i) => (
          <div
            key={i.id}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: 12,
              alignItems: "center",
              borderBottom: "1px solid var(--border)",
              padding: "8px 0",
            }}
          >
            <img
              src={i.image}
              alt={i.title}
              style={{
                width: 80,
                height: 60,
                objectFit: "cover",
                borderRadius: 8,
              }}
              loading="lazy"
            />
            <div>
              <div style={{ fontWeight: 600 }}>{i.title}</div>
              <div style={{ color: "var(--muted)" }}>
                ${i.price} x {i.qty}
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="btn outline" onClick={() => cart.dec(i.id)}>
                -
              </button>
              <button className="btn outline" onClick={() => cart.inc(i.id)}>
                +
              </button>
              <button className="btn outline" onClick={() => cart.remove(i.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <strong>Total: ${cart.total()}</strong>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}