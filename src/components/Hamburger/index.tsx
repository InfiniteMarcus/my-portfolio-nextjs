"use client";

import { ReactNode, useState } from "react";

import style from "./styles.module.css";

type Props = {
  navItems: ReactNode;
};

const Hamburger = ({ navItems }: Props) => {
  const [toggled, setToggled] = useState(false);

  const toggleHamburger = () => {
    setToggled(!toggled);
  };

  return (
    <div className={style.hamburger}>
      <div
        onClick={toggleHamburger}
        className={`${style["hamburger-btn"]} ${toggled ? style["open"] : ""}`}
      >
        <div className={style["hamburger-icon"]}></div>
      </div>

      <div
        style={{ display: toggled ? "flex" : "none" }}
        className={style["hamburger-list"]}
      >
        {navItems}
      </div>

      <div
        style={{ display: toggled ? "block" : "none" }}
        className={style.unfocus}
        onClick={toggleHamburger}
      ></div>
    </div>
  );
};

export default Hamburger;
