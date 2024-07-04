import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState([])

  const htmlSearchField = useRef(null);
  const setSearchParams = useSearchParams()
  //React Router Hooks

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

  //Effects
  const handleSubmit = async () =>{
    const url = "http://localhost:5000/api"
    
    try{
      const response = await fetch(`${url}/products?term=${setSearchParams.get()}`)
      const products = await response.json()
      setQuery(products)
    }catch(error){
      console.error("Search Error:",error)
    }
  }
  

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
