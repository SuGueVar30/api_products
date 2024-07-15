/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkCart({ page, title }) {
  return (
    <li className="w-auto h-auto">
      <Link
        to={page}
        className="pointer-events-none group w-auto h-auto bg-green-800/80 px-[20px] py-[10px] rounded-lg text-white/90 text-[18px] font-bold
        flex flex-row gap-[20px] justify-between items-center transition-all duration-300 ease-in-out 
        hover:bg-zinc-900 hover:text-yellow-600 "
      >
        <svg viewBox="0 -960 960 960" fill="currentColor" className="h-[28px] w-auto">
          <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
        </svg>

        <span className="text-[20px] font-bold">{title}</span>
      </Link>
    </li>
  );
}
