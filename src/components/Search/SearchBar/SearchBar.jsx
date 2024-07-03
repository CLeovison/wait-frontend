import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState([]);
  const htmlSearchField = useRef(null);

  //React Router Hooks
  const [searchParams, setSearchParams] = useSearchParams();

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

  const handleAction = async () => {
    const url = "http://localhost:5000/api";

    try {
      setIsLoading(true);
      const response = await fetch(
        `${url}/products?search=${searchParams.get()}`
      );
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
      <form className="flex items-center" method="get" >
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

      {isLoading ? <p>Loading...</p> : ""}
    </>
  );
}
