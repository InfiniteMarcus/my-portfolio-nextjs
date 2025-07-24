import Image from "next/image";
import Link from "next/link";

import style from "./styles.module.css";

import Navbar from "../Navbar";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

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
    <header className={style.header}>
      <Link className={style.image} href="/">
        <Image
          src="/images/logo.png"
          alt={t("Images alt.Logo")}
          width={90}
          height={75}
        />
      </Link>

      <h1 className={style.title}>
        <Link href="/" />
      </h1>

      <Navbar items={items} />
    </header>
  );
};

export default Header;
