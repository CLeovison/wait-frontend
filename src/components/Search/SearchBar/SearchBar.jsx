import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [query, setQuery] = useState([])
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

  useEffect(() =>{
    
  const handleSubmit = async () => {
    const url = "http://localhost:5000/api"

    try{
      const response = await fetch(`${url}/products?term=${searchParams.get("term")}`)
      if(!response){
        throw new Error("The data that you are getting is not available")
      }
      const products = await response.json()
      console.log(products)
      
      setQuery(products.productPaginated)
    }catch(error){
      console.error("Search error:", error)
    }
  };
  handleSubmit()

  },[])
  
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
            onChange={handleChange}
            value={handleValue(e => query(e.target.value))}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
      
    </>
  );
}
