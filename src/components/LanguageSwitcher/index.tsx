"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { getUserLocale, setUserLocale } from "../../services/locale";
import { Locale } from "../../types";
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
      if (cookieLocale) {
        setLocale(cookieLocale as Locale);
      }
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    setUserLocale(newLocale);
    setLocale(newLocale);
  };

  return (
    <div className="relative inline-block">
      <select
        aria-label="Selecionar idioma"
        className="appearance-none bg-brand-bg text-white border border-brand-primary rounded-lg pl-3.5 pr-9 py-2 text-sm sm:text-base cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
        name="language-switcher"
        id="language-switcher"
        onChange={handleChange}
        value={locale}
      >
        {locales.map((l, index) => (
          <option
            value={l.value}
            key={`locale-${index}`}
            className="bg-brand-bg text-white"
          >
            {l.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/80">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
