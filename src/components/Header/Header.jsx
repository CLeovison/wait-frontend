import React from "react";
import { Link } from "react-router-dom";
//Icons
import { Heart, UserRound, ShoppingCart } from "lucide-react";
import SearchBar from "../Search/SearchBar/SearchBar";

export default function Header() {
  return (
    <nav className="bg-zinc-700 h-20 flex flex-row gap-2 justify-end items-center">
      <ul className="flex">
        <li className="p-4 text-white inline-block">
          <SearchBar />
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/wishlist">
            <Heart />
          </Link>
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/profile">
            <UserRound />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
