import React, { useState } from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <>
      <form className="flex items-center">
        {!isOpen ? (
          <label htmlFor="search-checkbox">
            <input
              type="checkbox"
              id="search-checkbox"
              defaultChecked={isOpen}
              onChange={handleOpen}
              className="hidden"
            />
            <Search className="cursor-pointer" onClick={handleOpen}/>
          </label>
        ) : (
          <label htmlFor="search" className="flex ">
            <input
              type="search"
              id="search"
              name=""
              className="outline-none text-slate-700 mr-2  "
            />
            <Search className="cursor-pointer" onClick={handleOpen} />
          </label>
        )}
      </form>
    </>
  );
}
