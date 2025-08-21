import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../store/cart.js";
import { useTranslation } from "react-i18next";
export default function TourDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const cart = useCart();
  const { t } = useTranslation();
  const [tour, setTour] = useState(null);
  useEffect(() => {
    document.title = "SAYAKAT — Tour";
  }, []);
  useEffect(() => {
    fetch("/tours.json")
      .then((r) => r.json())
      .then((j) => {
        const item = (j.tours || []).find((x) => String(x.id) === String(id));
        setTour(item || null);
      });
  }, [id]);
  if (!tour)
    return (
      <div className="container" style={{ paddingTop: 28 }}>
        <div className="card">Loading...</div>
      </div>
    );
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="card" style={{ display: "grid", gap: 16 }}>
        <button className="btn outline" onClick={() => nav(-1)}>
          {t("actions.back")}
        </button>
        <img
          src={tour.image}
          alt={tour.title}
          style={{ width: "100%", maxHeight: 520, objectFit: "cover" }}
          loading="lazy"
        />
        <h2>
          {tour.title} — {tour.city}, {tour.country}
        </h2>
        <div style={{ display: "flex", gap: 14, color: "var(--muted)" }}>
          <span>⭐ {tour.rating}</span>
          <span>{tour.nights} nights</span>
          <span>
            <strong>${tour.price}</strong>
          </span>
        </div>
        <p>
          {tour.description} Enjoy guided walks, local cuisine, and unique
          experiences curated by experts.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => cart.add(tour)}>
            {t("tour.addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}