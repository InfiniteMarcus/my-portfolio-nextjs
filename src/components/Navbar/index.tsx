"use client";

import { useState, useEffect } from "react";
import { debounce } from "../../utils";

import style from "./styles.module.css";
import NavItem from "../NavItem";
import Hamburger from "../Hamburger";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = {
  items: {
    href: string;
    text: string;
  }[];
};

const Navbar = ({ items }: Props) => {
  const [responsiveMode, setResponsiveMode] = useState(true);

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      window.innerWidth < 1050
        ? setResponsiveMode(true)
        : setResponsiveMode(false);
    }, 50);

    window.addEventListener("resize", debouncedHandleResize);

    debouncedHandleResize();

    // eslint-disable-next-line no-unused-vars
    (_: unknown) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const navItems = items.map((item, index) => (
    <div key={`navbar-${index}`}>
      <NavItem item={item} />
    </div>
  ));

  return (
    <nav
      className={style.nav}
      style={{ flexDirection: responsiveMode ? "row-reverse" : "row" }}
    >
      <ul className={`${style.ul} ${responsiveMode ? "" : style.visible}`}>
        {navItems}
      </ul>
      <Hamburger navItems={navItems} />

      <div
        style={{
          marginRight: responsiveMode ? "60px" : 0,
          marginLeft: responsiveMode ? 0 : "60px",
        }}
      >
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
