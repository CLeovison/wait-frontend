/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useContext } from "react";
import { Search } from "lucide-react";
import { SearchContextProvider } from "../../../hooks/Context/SearchContext";
import { SearchContext } from "../../../hooks/Context/SearchContext";

<SearchContextProvider>
  <SearchBar />
</SearchContextProvider>;
export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isResultShown, setIsResultShown] = useState(false);
  const { UseSearch } = useContext(SearchContext);

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

  const handleForm = (e) => {
    e.preventDefault();
    UseSearch(searchTerm);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
  });
  return (
    <>
      <form className="flex items-center" onSubmit={handleForm}>
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
    </>
  );
}
