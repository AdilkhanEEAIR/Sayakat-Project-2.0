import { useCart } from "../store/cart.js";
import { useFavs } from "../store/favs.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function TourCard({ tour }) {
  const cart = useCart();
  const favs = useFavs();
  const fav = favs.has(tour.id);
  
  return (
    <motion.div className="card tour-card" whileHover={{ y: -2, scale: 1.01 }}>
      <img src={tour.image} alt={tour.title} loading="lazy" />
      <h3>{tour.title}</h3>
      <div className="meta">
        <span>⭐ {tour.rating}</span>
        <span>{tour.nights} nights</span>
        <span className="price">${tour.price}</span>
      </div>
      <p style={{ color: "var(--muted)" }}>{tour.description}</p>
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => cart.add(tour)}>
            + Add
          </button>
          <Link className="btn outline" to={`/tours/${tour.id}`}>
            View
          </Link>
        </div>
        <button className="btn outline" onClick={() => favs.toggle(tour.id)}>
          {fav ? "★" : "☆"}
        </button>
      </div>
    </motion.div>
  );
}