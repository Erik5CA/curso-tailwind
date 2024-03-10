import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState("hidden");

  const handleShowMenu = () => {
    setShowMenu("flex");
  };

  const handleHideMenu = () => {
    setShowMenu("hidden");
  };

  return (
    <nav className="flex my-4 w-[100%] justify-between items-center">
      <img className="w-10 h-7" src={logo} alt="logo" />
      <div className=" gap-7 hidden xl:flex">
        <a
          className="text-neutral-grayish-blue text-xs hover:text-primary-soft-red"
          href="#"
        >
          Home
        </a>
        <a
          className="text-neutral-grayish-blue text-xs hover:text-primary-soft-red"
          href="#"
        >
          New
        </a>
        <a
          className="text-neutral-grayish-blue text-xs hover:text-primary-soft-red"
          href="#"
        >
          Popular
        </a>
        <a
          className="text-neutral-grayish-blue text-xs hover:text-primary-soft-red"
          href="#"
        >
          Trending
        </a>
        <a
          className="text-neutral-grayish-blue text-xs hover:text-primary-soft-red"
          href="#"
        >
          Categories
        </a>
      </div>
      <img
        onClick={handleShowMenu}
        className="w-9 h-5 xl:hidden"
        src={iconMenu}
        alt="icono de menú"
      />
      <div
        className={`absolute top-0 right-0 w-[100%] h-[100vh] ${showMenu} justify-end bg-slate-800/40 transition-all`}
      >
        <div className="flex flex-col w-[70%] h-[100%] p-5 gap-4 bg-neutral-off-white shadow-lg">
          <img
            onClick={handleHideMenu}
            className="w-8 h-8 self-end mb-8"
            src={iconMenuClose}
            alt="icono de cierre de menú"
          />
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
      </div>
    </nav>
  );
}
