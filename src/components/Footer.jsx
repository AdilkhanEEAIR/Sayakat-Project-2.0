import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="site">
      <div className="container footer-grid">
        <div>
          <h3>SAYAKAT</h3>
          <p>{t("home.heroSubtitle")}</p>
          <p style={{ color: "var(--muted)" }}>
            © 2025 SAYAKAT. {t("footer.rights")}
          </p>
        </div>
        <div>
          <h4>{t("footer.about")}</h4>
          <ul>
            <li>Sayakat Travel LTD</li>
            <li>License TR-2025-0097</li>
            <li>support@sayakat.com</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="/flights">Flights</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t("footer.contacts")}</h4>
          <ul>
            <li>+996 (555) 000-111</li>
            <li>Bishkek, KG</li>
            <li>09:00–19:00 GMT+6</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}