import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="w-full text-center mx-auto pb-12 mt-20 text-xl sm:text-2xl text-white/90">
      <span>
        {t("Made with")}{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand-primary transition-colors"
        >
          Next.js
        </a>{" "}
        {t("by")}{" "}
        <a
          href="https://github.com/InfiniteMarcus"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand-primary transition-colors"
        >
          @infinitemarcus
        </a>
      </span>
    </footer>
  );
};

export default Footer;
