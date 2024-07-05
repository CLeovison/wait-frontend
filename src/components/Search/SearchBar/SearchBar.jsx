import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const htmlSearchField = useRef(null);

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleChange = (e) => {
    setSearchParams((prev) => {
      prev.set("q", e.target.value);
    });
  };

  const handleValue = () => {
    searchParams.get("q");
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
            onChange={handleChange}
            value={handleValue((e) => e.target.value)}
           
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
    </>
  );
}
