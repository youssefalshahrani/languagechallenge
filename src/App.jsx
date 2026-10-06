import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { changeLanguage } from "i18next";

function App() {
  const { t, i18n } = useTranslation();
  const current = i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changelanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "sp", name: "Español" },
    { code: "urdu", name: "Urdu" },
  ];

  return (
    <>
      <div className=" bg-gray-900 h-screen flex justify-between  pt-[5%] ">
        <select
          onChange={(e) => changelanguage(e.target.value)}
          value={i18n.language}
          className="  cursor-pointer appearance-none  "
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <h1 className=" text-white text-4xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  ">
          {t("hero.t")}
        </h1>
        <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  ">
          {t("hero.s")}
        </h2>
      </div>
    </>
  );
}

export default App;

{
  /* <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  " >  صهد   </h2>
        <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  " >  مبشبش   </h2>
        <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  " >  سوري منك   </h2>
        <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  " >  بدنا نروق   </h2> */
}
// داير مدار قاموس المتدربين سند تطمن  - واصل

//         <div className=" grid grid-cols-5 gap-4 pt-[5%] ">

//  </div>

{
  /*     
             <h1 className=" text-white text-4xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center pt-[5%] " >f </h1>
        <h2 className=" text-white text-3xl font-medium font-['thmanyah_serif_display'] w-full flex justify-center  " > f </h2>
         */
}
