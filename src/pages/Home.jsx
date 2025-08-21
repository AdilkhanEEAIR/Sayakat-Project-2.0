import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { t } = useTranslation();
  const nav = useNavigate();
  useEffect(() => {
    document.title = "SAYAKAT — Home";
  }, []);
  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <section
        className="card"
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: 36, margin: 0 }}>{t("home.heroTitle")}</h1>
          <p style={{ color: "var(--muted)" }}>{t("home.heroSubtitle")}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button className="btn" onClick={() => nav("/tours")}>
              {t("home.cta")}
            </button>
            <button className="btn outline" onClick={() => nav("/flights")}>
              Flights
            </button>
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/hero_v2/1200/500"
          alt="hero"
          style={{ borderRadius: 16 }}
          loading="lazy"
        />
      </section>
    </div>
  );
}