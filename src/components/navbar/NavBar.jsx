/* eslint-disable no-unused-vars */
import React from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import NavLinkCart from "./NavLinkCart";

export default function NavBar() {
  return (
    <div
      className="w-full h-[80px] bg-gradient-to-tr to-slate-900 from-gray-800 
      rounded-lg flex flex-row justify-center items-center"
    >
      <nav className="w-full h-full flex flex-row justify-between items-center">
        <NavLogo />

        <ul
          className="h-full w-auto flex gap-[20px] flex-row justify-around items-center 
          list-none py-[10px] px-[20px]"
        >
          <NavLink page={"/"} title={"Home"} />
          <NavLink page={"/products"} title={"Productos"} />
          <NavLink page={"/store"} title={"Tienda"} />
          <NavLink page={"/contact"} title={"Contáctenos"} />
          <NavLink page={"/cart"} title={"Carrito"} />
          <NavLinkCart page={"/cart"} title={"0"} />
        </ul>
      </nav>
    </div>
  );
}
