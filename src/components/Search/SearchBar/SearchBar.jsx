import React, { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import { useDebounce } from "../../../hooks/UseDebounce/useDebounce";
import { getSearchProduct } from "../../../services/api/Product/Product.js";
import SearchList from "../SearchList/SearchList";

export default function SearchBar() {
  //States
  const [isChecked, setIsChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [searchItems, setSearchItems] = useState([]);

  // Context / Hooks
  const { setSearch } = useSearch();
  const debounceSearch = useDebounce(searchTerm, 1000);
  const htmlSearchField = useRef(null);

  //Start of Handler Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setSearchTerm(searchItems[selectedItem].productinfo.productname);
        setSelectedItem(prev => prev + 1);
        break;
      case "ArrowUp":
        setSearchTerm(searchItems[selectedItem].productinfo.productname);
        setSelectedItem(prev => prev - 1);
        break;
      case "Enter":
        break;
      case "Escape":
        setIsChecked(false);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    try {
      const productList = await getSearchProduct(debounceSearch);
      setSearchItems(productList.productPaginated);
    } catch (error) {
      console.error(error);
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

      {isChecked && <SearchList results={filteredItems} />}
    </>
  );
}
