import React, { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import SearchList from "../SearchList/SearchList";
import { useDebounce } from "../../../hooks/UseDebounce/useDebounce";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearch = useDebounce(searchTerm, 500);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchItems, setSearchItems] = useState([]);
  const htmlSearchField = useRef(null);

  // Context / Hooks
  const { setSearch } = useSearch();

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

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);

    try {
      const url = "http://localhost:5000/api";
      const response = await fetch(
        `${url}/products?productinfo.productname=${debounceSearch.toLocaleUpperCase()}`
      );
      if (!response.ok) {
        throw new Error("The Data that you are searching is not available");
      }
      const items = await response.json();
      setSearchItems(items.productPaginated);
    } catch (error) {
      console.log(error);
      setSearchItems([]);
    }
  };

  const handleKeyDown = (e) => {
    if (searchItems < selectedItem.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchTerm.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        window.open(searchTerm(selectedItem).show.url);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  //End of Handler Function

  //UseMemo
  const filteredItems = useMemo(
    () =>
      searchItems.filter((item) =>
        item.productinfo.productname.includes(debounceSearch)
      ),
    [searchItems, debounceSearch]
  );

  
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
            onKeyDown={handleKeyDown}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>

      {isChecked && <SearchList results={filter} />}
    </>
  );
}
