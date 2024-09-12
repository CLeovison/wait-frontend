import React from "react";
import { Link } from "react-router-dom";
//Icons
import { Heart, UserRound, ShoppingCart } from "lucide-react";
import SearchBar from "../../components/Search/SearchBar/SearchBar"

export default function Header() {
  return (
    <nav className="bg-zinc-700 h-20 flex flex-row gap-2 justify-end items-center w-full">
      <ul className="flex">
        <li className="p-4 text-white inline-block">
          <SearchBar />
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/">
            <Heart />
          </Link>
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/">
            <ShoppingCart />
          </Link>
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/">
            <UserRound />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
