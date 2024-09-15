import React from "react";
import { Link } from "react-router-dom";
//Icons
import { Heart, UserRound, ShoppingCart } from "lucide-react";
import SearchBar from "../../components/Search/SearchBar/SearchBar";
import Tooltip from "../../components/Tooltip/Tooltip";

export default function Header() {
  return (
    <nav className="bg-zinc-700 h-20 flex flex-row gap-2 justify-end items-center w-full ">
      <ul className="flex">
        <li className="p-4 text-white inline-block">
            <SearchBar />
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/">
            <Tooltip tooltip={"Wishlist "}>
              <Heart />
            </Tooltip>
          </Link>
        </li>
        <li className="p-4 text-white grid content-center">
          <Link to="/">
            <Tooltip tooltip={"Cart"}>
              <ShoppingCart />
            </Tooltip>
          </Link>
        </li>
        <li className="p-4 text-white grid content-center mr-3">
          <Link to="/">
            <Tooltip tooltip={"Profile"}>
              <UserRound />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
