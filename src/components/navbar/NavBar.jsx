/* eslint-disable no-unused-vars */
import React from "react";

export default function NavBar() {
  return (
    <div className="w-full h-[80px] bg-gradient-to-tr to-slate-900 from-gray-800 rounded-lg flex flex-row justify-center items-center">
      <nav className="w-full h-full flex flex-row justify-between items-center">
        <div className="w-auto h-full flex justify-center items-center">
          <a href="/" className="h-full w-auto flex flex-row justify-between items-center">
            <img src="https://img.icons8.com/fluency/500/galaxy-store.png" alt="galaxy-store" className="h-[85px] w-auto object-cover" />
            <h1 className="text-[30px] font-SonsieOne ">Products Store</h1>
          </a>
        </div>
        <ul className="h-full w-auto flex gap-[20px] flex-row justify-around items-center list-none py-[10px] px-[20px]">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
