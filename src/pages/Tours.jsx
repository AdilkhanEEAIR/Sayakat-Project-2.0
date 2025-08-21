import { useEffect, useMemo, useState } from "react";
import TourCard from "../components/TourCard.jsx";
export default function Tours() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "SAYAKAT — Tours";
  }, []);
  useEffect(() => {
    const t = setTimeout(() => {
      fetch("/tours.json")
        .then((r) => r.json())
        .then((j) => setData(j.tours || []))
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(t);
  }, []);
  const filtered = useMemo(() => {
    let arr = data;
    if (q)
      arr = arr.filter((t) =>
        (t.title + t.city + t.country).toLowerCase().includes(q.toLowerCase())
      );
    if (sort === "price") arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "rating") arr = [...arr].sort((a, b) => b.rating - a.rating);
    return arr;
  }, [data, q, sort]);
  
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search city or title"
            style={{
              flex: "1 1 260px",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
            }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
            }}
          >
            <option value="">Sort</option>
            <option value="price">By price</option>
            <option value="rating">By rating</option>
          </select>
          <span style={{ color: "var(--muted)" }}>
            {filtered.length} results
          </span>
        </div>
      </div>
      {loading ? (
        <div className="grid cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="card skeleton" key={i} style={{ height: 280 }} />
          ))}
        </div>
      ) : (
        <div className="grid cols-3">
          {filtered.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      )}
    </div>
  );
}