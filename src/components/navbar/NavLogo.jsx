/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <div className="w-auto h-full flex justify-center items-center">
      <Link to="/" className="h-full w-auto flex flex-row justify-between items-center">
        <img src="https://img.icons8.com/fluency/500/galaxy-store.png" alt="galaxy-store" className="h-[85px] w-auto object-cover" />
        <h1 className="text-[30px] font-SonsieOne ">Products Store</h1>
      </Link>
    </div>
  );
}
