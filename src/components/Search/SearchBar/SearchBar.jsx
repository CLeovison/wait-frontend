import React, { useRef, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const htmlSearchField = useRef(null);

  //Handle Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleChange = (e) =>{
      setSearchInput(e.target.value)
      console.log(searchInput)
  }
  //End of Handle Functions
  return (
    <>
      <form
        className="flex items-center"
        method="get"
        action="http://localhost:5000/api/products?products="
      >
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
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
