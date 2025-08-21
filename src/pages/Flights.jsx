import { useEffect } from "react";
export default function Flights() {
  useEffect(() => {
    document.title = "SAYAKAT — Flights";
  }, []);

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <div className="card">
        <h2>Flights (demo)</h2>
        <p>Placeholder. Integrate flight search later.</p>
      </div>
    </div>
  );
}