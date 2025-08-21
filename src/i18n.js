import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      brand: "SAYAKAT",
      nav: {
        home: "Home",
        tours: "Tours",
        flights: "Flights",
        cart: "Cart",
        login: "Login",
        register: "Register",
        profile: "Profile",
      },
      actions: {
        theme: "Theme",
        language: "Language",
        total: "Total",
        add: "Add",
        remove: "Remove",
        favorites: "Favorites",
        back: "Back",
      },
      home: {
        heroTitle: "Discover your next journey",
        heroSubtitle: "Curated tours around the world",
        cta: "Explore tours",
      },
      footer: {
        about: "About",
        contacts: "Contacts",
        rights: "All rights reserved.",
      },
      tour: { details: "Tour details", addToCart: "Add to cart" },
    },
  },
  ru: {
    translation: {
      brand: "SAYAKAT",
      nav: {
        home: "ГЛАВНАЯ",
        tours: "ТУРЫ",
        flights: "РЕЙСЫ",
        cart: "КОРЗИНА",
        login: "ВОЙТИ",
        register: "РЕГИСТРАЦИЯ",
        profile: "Профиль",
      },
      actions: {
        theme: "Тема",
        language: "Язык",
        total: "Итого",
        add: "Добавить",
        remove: "Удалить",
        favorites: "Избранное",
        back: "Назад",
      },
      home: {
        heroTitle: "Найди своё следующее путешествие",
        heroSubtitle: "Подборка туров по всему миру",
        cta: "Смотреть туры",
      },
      footer: {
        about: "О нас",
        contacts: "Контакты",
        rights: "Все права защищены.",
      },
      tour: { details: "Детали тура", addToCart: "Добавить в корзину" },
    },
  },
  fr: {
    translation: {
      brand: "SAYAKAT",
      nav: {
        home: "Accueil",
        tours: "Circuits",
        flights: "Vols",
        cart: "Panier",
        login: "Connexion",
        register: "Inscription",
        profile: "Profil",
      },
      actions: {
        theme: "Thème",
        language: "Langue",
        total: "Total",
        add: "Ajouter",
        remove: "Supprimer",
        favorites: "Favoris",
        back: "Retour",
      },
      home: {
        heroTitle: "Découvrez votre prochain voyage",
        heroSubtitle: "Circuits sélectionnés dans le monde",
        cta: "Explorer les circuits",
      },
      footer: {
        about: "À propos",
        contacts: "Contacts",
        rights: "Tous droits réservés.",
      },
      tour: { details: "Détails du circuit", addToCart: "Ajouter au panier" },
    },
  },
  ky: {
    translation: {
      brand: "SAYAKAT",
      nav: {
        home: "Башкы",
        tours: "Турлар",
        flights: "Рейстер",
        cart: "Себет",
        login: "Кирүү",
        register: "Катталуу",
        profile: "Профиль",
      },
      actions: {
        theme: "Тема",
        language: "Тил",
        total: "Жыйынтык",
        add: "Кошуу",
        remove: "Өчүрүү",
        favorites: "Тандалгандар",
        back: "Артка",
      },
      home: {
        heroTitle: "Кийинки саякатыңызды табыңыз",
        heroSubtitle: "Дүйнө жүзү боюнча турлар",
        cta: "Турларды көрүү",
      },
      footer: {
        about: "Биз жөнүндө",
        contacts: "Байланыш",
        rights: "Бардык укуктар корголгон.",
      },
      tour: { details: "Тур чоо-жайы", addToCart: "Себетке кошуу" },
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("sayakat-lang") || "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;