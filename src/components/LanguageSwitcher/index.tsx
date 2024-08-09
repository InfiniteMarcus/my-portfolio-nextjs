"use client";

import { useEffect, useState } from "react";

import { getUserLocale, setUserLocale } from "../../services/locale";
import { Locale } from "../../types";

import style from "./styles.module.css";
import { DEFAULT_LOCALE } from "../../config";

const locales = [
  {
    value: "pt-BR",
    label: "Português",
  },
  {
    value: "en-US",
    label: "English",
  },
];

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    getUserLocale().then((cookieLocale) => {
      setLocale(cookieLocale as Locale);
    });
  }, []);

  return (
    <select
      className={style.select}
      name="language-switcher"
      id="language-switcher"
      onChange={() => {
        const select = document.getElementById(
          "language-switcher",
        ) as HTMLInputElement;
        const newLocale = select?.value as Locale;
        setUserLocale(newLocale);
        setLocale(newLocale);
      }}
      value={locale}
    >
      {locales.map((l, index) => (
        <option value={l.value} key={`locale-${index}`}>
          {l.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
