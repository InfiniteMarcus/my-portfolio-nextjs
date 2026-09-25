"use client";

import { ReactNode, useState } from "react";

type Props = {
  navItems: ReactNode;
};

const Hamburger = ({ navItems }: Props) => {
  const [toggled, setToggled] = useState(false);

  const toggleHamburger = () => {
    setToggled((prev) => !prev);
  };

  return (
    <div className="flex min-[1050px]:hidden items-center relative">
      <button
        type="button"
        aria-label={
          toggled ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        aria-expanded={toggled}
        aria-controls="mobile-nav-drawer"
        onClick={toggleHamburger}
        className="relative z-30 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none cursor-pointer"
      >
        <span
          className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ease-out ${
            toggled ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ease-out ${
            toggled ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ease-out ${
            toggled ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Backdrop */}
      {toggled && (
        <div
          className="fixed inset-0 z-10 bg-black/70 backdrop-blur-xs"
          onClick={toggleHamburger}
        />
      )}

      {/* Drawer */}
      {toggled && (
        <div
          id="mobile-nav-drawer"
          className="absolute top-[-45px] right-[-50px] z-20 flex flex-col items-start w-64 h-[110vh] pt-28 pl-6 bg-[#1e1e1e] border-l-2 border-b-2 border-brand-primary shadow-2xl transition-transform duration-300"
        >
          <ul
            className="flex flex-col gap-2 w-full"
            onClick={() => setToggled(false)}
          >
            {navItems}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
