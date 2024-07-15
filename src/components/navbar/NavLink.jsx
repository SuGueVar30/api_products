/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ page, title }) {
  return (
    <li className="w-auto h-auto">
      <Link
        to={page}
        className="w-auto h-auto bg-white/80 px-[20px] py-[10px] rounded-lg text-zinc-900 text-[18px] font-bold
        flex justify-center items-center transition-all duration-300 ease-in-out 
        hover:bg-zinc-900 hover:text-yellow-600 hover:-translate-y-[1px]"
      >
        {title}
      </Link>
    </li>
  );
}
