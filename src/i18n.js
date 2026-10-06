import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        hero: { t: " عنوان رئيسي ", s: " عنوان فرعي " },
      },
    },
    urdu: {
      translation: {
        hero: { t: " مرکزی سرخی", s: " ذیلی سرخی " },
      },
    },
    sp: {
      translation: {
        hero: { t: " Titular principal", s: " Subtítulo" },
      },
    },
    en: {
      translation: {
        hero: { t: " Main Headline ", s: " Subheadline" },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18next;
