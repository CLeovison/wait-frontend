/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { SearchContextProvider } from "../../../hooks/Context/SearchContext";
import { useSearch } from "../../../hooks/Context/useSearch";
<SearchContextProvider>
  <SearchBar />
</SearchContextProvider>;
export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { result, query, searchParams, isLoading, setSearch } = useSearch();

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
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
