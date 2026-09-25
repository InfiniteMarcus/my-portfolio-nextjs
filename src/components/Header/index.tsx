import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import { getTranslations } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations("Header");

  const items = [
    {
      href: "#aboutMe",
      text: t("About me"),
    },
    {
      href: "#experience",
      text: t("Experience"),
    },
    {
      href: "#projects",
      text: t("Projects"),
    },
    {
      href: "#skills",
      text: t("Skills"),
    },
    {
      href: "#resume",
      text: t("Resume"),
    },
    {
      href: "#contact",
      text: t("Contact"),
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between z-40 px-5 sm:px-8 py-4 bg-[#1e1e1e]/85 backdrop-blur-md border-b-2 border-brand-primary">
      <Link
        className="ml-2 sm:ml-5 opacity-90 hover:opacity-100 transition-opacity"
        href="/"
        aria-label="Início"
      >
        <Image
          src="/images/logo.png"
          alt={t("Images alt.Logo")}
          width={90}
          height={75}
          priority
        />
      </Link>

      <Navbar items={items} />
    </header>
  );
};

export default Header;
