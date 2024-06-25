import React, { useState } from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <form className="flex items-center">

        <label htmlFor="search" className="flex">
          <input type="search" name="" id="" />
          <Search className="cursor-pointer"/>
        </label>
      </form>
    </>
  );
}
