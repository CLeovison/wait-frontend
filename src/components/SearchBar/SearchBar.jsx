import React, { useRef, useState } from "react";
import { Search } from "lucide-react";


export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null)
  
  //Fetching Data From Backend

  
  const handleIcon = (e) => {
    e.preventDefault()
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest('form').requestSubmit(e.currentTarget)
    }
    setIsChecked((prev) => !prev);
  };



  return (
    <>
      <form className="flex items-center" method="get" >
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
            className="text-black p-1"
            ref={htmlSearchField}
     
          />
          
        )}
        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer"/>
        </button>
      </form>
      
    </>
  );
}
