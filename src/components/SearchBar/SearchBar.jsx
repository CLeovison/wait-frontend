import React, { useRef, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);

  //Fetching Data States
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState([]);

  //Handle Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleSearch = async (request) => {
    const url = "http://localhost:5000/api";
    try {
      setIsLoading(true);
      const response = await fetch(`${url}/products?search=${request}`);

      if (!response) {
        throw new Error("The Data That You Are Getting Is Not Available");
      }
      const products = await response.json();
      setQuery(products.productPaginated);
      
      console.log(products.productPaginated);

    } catch (error) {
      console.error("Search Error:", error);
      setQuery([]);
    }
    setIsLoading(false);
  };

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
            onChange={handleSearch}
            placeholder="Search Product"
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
      {isLoading ? <p>Loading...</p> : ""}

      <div>
        <ul>
          {query.map((item, index) => {
            <li key={index}>{item.productPaginated}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
