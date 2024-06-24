import React, { useState } from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  const [checked, setChecked] = useState(false);
  // const [isOpen, setIsOpen] = useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleOpen = () =>{
    console.log('Trial');
    
  }  
  return (
    <>
      <form className="flex items-center">
        {!checked ? (
          <label htmlFor="search-checkbox">
          
            <input
              type="checkbox"
              id="search-checkbox"
              defaultChecked={checked}
              onChange={handleChange}
              className="hidden"
              
            />
            <Search className="cursor-pointer"/>
          </label>
        ) : (
          <label htmlFor="search" className="flex ">
            <input
              type="search"
              id="search"
              name=""
              className="outline-none text-slate-700 mr-2  "
            />
            <Search className="cursor-pointer" onClick={handleOpen}/> 
          </label>
        )}
      </form>
    </>
  );
}
