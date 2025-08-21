import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUI } from "../store/ui.js";
import { useAuth } from "../store/auth.js";
import { useCart } from "../store/cart.js";

export default function Header() {
  const { t, i18n } = useTranslation();
  const ui = useUI();
  const auth = useAuth();
  const cart = useCart();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const go = (p) => {
    setOpen(false);
    nav(p);
  };
  const setLang = (l) => {
    localStorage.setItem("sayakat-lang", l);
    i18n.changeLanguage(l);
    ui.setLang(l);
  };
  return (
    <header className="site">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/logo.svg" width="28" height="28" alt="logo" />
        </Link>
        <nav className="main">
          <NavLink to="/" end>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/tours">{t("nav.tours")}</NavLink>
          <NavLink to="/flights">{t("nav.flights")}</NavLink>
          <NavLink to="/cart">
            {t("nav.cart")} ({cart.items.length})
          </NavLink>
        </nav>
        <div className="control-row">
          <div className="select">
            <select
              value={i18n.language}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="fr">FR</option>
              <option value="ky">KY</option>
            </select>
          </div>
          <button
            className="btn outline"
            onClick={() => ui.setTheme(ui.theme === "light" ? "dark" : "light")}
          >
            {t("actions.theme")}
          </button>
          {auth.user ? (
            <button className="btn outline" onClick={() => go("/profile")}>
              {t("nav.profile")}
            </button>
          ) : (
            <>
              <button className="btn outline" onClick={() => go("/login")}>
                {t("nav.login")}
              </button>
              <button className="btn" onClick={() => go("/register")}>
                {t("nav.register")}
              </button>
            </>
          )}
          <button className="burger btn outline" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="container mobile-panel">
          <NavLink to="/" onClick={() => go("/")}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/tours" onClick={() => go("/tours")}>
            {t("nav.tours")}
          </NavLink>
          <NavLink to="/flights" onClick={() => go("/flights")}>
            {t("nav.flights")}
          </NavLink>
          <NavLink to="/cart" onClick={() => go("/cart")}>
            {t("nav.cart")} ({cart.items.length})
          </NavLink>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {auth.user ? (
              <button className="btn outline" onClick={() => go("/profile")}>
                {t("nav.profile")}
              </button>
            ) : (
              <>
                <button className="btn outline" onClick={() => go("/login")}>
                  {t("nav.login")}
                </button>
                <button className="btn" onClick={() => go("/register")}>
                  {t("nav.register")}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}