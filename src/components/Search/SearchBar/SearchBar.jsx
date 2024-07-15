import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import SearchResult from "../SearchResult/SearchResult";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isResultShown, setIsResultShown] = useState(false);

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
    setIsResultShown(true);
  };

  const handleOutsideClick = (e) => {
    if (!htmlSearchField.current.contains(e.target)) {
      setIsResultShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
  });
  return (
    <>
      <form className="flex items-center">
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
            className="text-black p-1"
            ref={htmlSearchField}
            placeholder="Search Product"
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>

      {isResultShown ? <SearchResult className="hidden bg-red-400" /> : null}
    </>
  );
}
