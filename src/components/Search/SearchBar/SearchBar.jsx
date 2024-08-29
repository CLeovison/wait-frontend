import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import SearchList from "../SearchList/SearchList";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([])
  const htmlSearchField = useRef(null);

  // Context / Hooks
  const { setSearch, isLoading } = useSearch();

  //Start of Handler Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //End of Handler Function

  //UseEffect

  useEffect(() =>{
    
    const fetchItems = async() =>{
        try{
          const url = "http://localhost:5000/api"
          const response = await fetch(`${url}/products?productinfo.productname${searchTerm}`)
          if(!response.ok){
            throw new Error("Didn't Receive Any Data")
          }
          const searchItem = await response.json()
          setItems(searchItem.productPaginated)
        }catch(error){
          console.log(error);
          setItems([])
        }
    }
    fetchItems()
  },[searchTerm])
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
            className="text-black p-1 w-60 rounded-lg "
            ref={htmlSearchField}
            placeholder="Search Product"
            onChange={handleChange}
            value={searchTerm}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>

      {isChecked && <SearchList results={items} isLoading={isLoading} />}
    </>
  );
}
