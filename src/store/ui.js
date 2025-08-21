import { create } from "zustand";
export const useUI = create((set) => ({
  theme: localStorage.getItem("sayakat-theme") || "light",
  setTheme: (t) => {
    localStorage.setItem("sayakat-theme", t);
    document.documentElement.setAttribute("data-theme", t);
    set({ theme: t });
  },
  lang: localStorage.getItem("sayakat-lang") || "ru",
  setLang: (l) => {
    localStorage.setItem("sayakat-lang", l);
    set({ lang: l });
  },
  mobileOpen: false,
  setMobileOpen: (v) => set({ mobileOpen: v }),
}));
document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("sayakat-theme") || "light"
);