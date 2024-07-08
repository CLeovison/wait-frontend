import React, { useRef, useState } from "react";
import { Search } from "lucide-react";


export default function SearchBar({values, changes}) {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };


  //End of Handle Functions

  return (
    <>
      <form className="flex items-center" >
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="term"
            className="text-black p-1"
            ref={htmlSearchField}
            placeholder="Search Product"
            onChange={changes}
            value={values}
           
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
      
    </>
  );
}
