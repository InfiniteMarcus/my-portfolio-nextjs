import { useTranslations } from "next-intl";

import style from "./styles.module.css";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={style.footer}>
      <span>
        {t("Made with")}{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        {t("by")}{" "}
        <a
          href="https://github.com/InfiniteMarcus"
          target="_blank"
          rel="noopener noreferrer"
        >
          @infinitemarcus
        </a>
      </span>
    </footer>
  );
};

export default Footer;
