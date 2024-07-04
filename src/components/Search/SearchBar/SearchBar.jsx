import React, { useRef, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const htmlSearchField = useRef(null);

  //Start of Handle Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  //End of Handle Functions

  return (
    <>
      <form className="flex items-center">
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="term"
            className="text-black p-1"
            ref={htmlSearchField}
            placeholder="Search Product"
            value={searchInput}
            onChange={handleChange}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
    </>
  );
}
