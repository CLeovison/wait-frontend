import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import SearchList from "../SearchList/SearchList";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  //Context
  const { setSearch, isLoading, result } = useSearch();

  //Start of Handler Functions

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }

  //End of Handler Function

  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
            className="text-black p-1 w-60 rounded-lg "
            ref={htmlSearchField}
            placeholder="Search Product"
            onChange={handleChange}
            value={searchTerm}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>

      {isChecked && (
        <SearchList results={result} isLoading={isLoading} />
      )}
    </>
  );
}
