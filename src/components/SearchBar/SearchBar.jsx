import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [checked, setChecked] = useState(false);




  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <>
      <form className="flex items-center">
        {!checked ? (
          <label htmlFor="search-checkbox">
          
            <input
              type="checkbox"
              id="search-checkbox"
              checked={checked}
              onChange={handleChange}
              className="hidden"
              
            />
            <Search className="cursor-pointer"/>
          </label>
          
        ) : (
          
          <label htmlFor="search">
        
            <input
              type="search"
              id="search"
              name=""
              className="outline-none text-slate-700 "
              
            />
            
          </label>
        )}
      </form>
    </>
  );
}
