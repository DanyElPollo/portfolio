import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import profileEn from "./language/en/profile.json";
import profileEs from "./language/es/profile.json";
import navbarEn from "./language/en/navbar.json";
import navbarEs from "./language/es/navbar.json";
import skillsEn from "./language/en/skills.json";
import skillsEs from "./language/es/skills.json";

const resources = {
  en: {
    profile: profileEn,
    nav: navbarEn,
    skills: skillsEn,
  },
  es: {
    profile: profileEs,
    nav: navbarEs,
    skills: skillsEs,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    ns: ["profile", "nav", "skills"],
    defaultNS: "profile",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
