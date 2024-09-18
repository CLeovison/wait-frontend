import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import { useDebounce } from "../../../hooks/UseDebounce/useDebounce";
import { getSearchProduct } from "../../../services/api/Product/Product.js";
import SearchList from "../SearchList/SearchList";
import Tooltip from "../../Tooltip/Tooltip.jsx";

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

  //UseEffect
  useEffect(() => {
    const fetchSearchItems = async () => {
      if (debounceSearch) {
        const productList = await getSearchProduct(debounceSearch);
        setSearchItems(productList.productPaginated);
      } else {
        setSearchItems([]);
      }
    };
    fetchSearchItems();
  }, [debounceSearch]);

  //Start of Handler Functions
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      e.target.closest("form").requestSubmit(e.currentTarget);
    }

    setIsChecked((prev) => !prev);
    if (!isChecked) {
      setTimeout(() => htmlSearchField.current.focus(), 0);
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setSelectedItem((prev) => Math.min(prev + 1, searchItems.length - 1));
        setSearchTerm(searchItems[selectedItem].productinfo.productname);
        break;
      case "ArrowUp":
        setSelectedItem((prev) => Math.max(prev - 1, 0));
        setSearchTerm(searchItems[selectedItem].productinfo.productname);
        break;
      case "Enter":
        break;
      case "Escape":
        setIsChecked(false);
        break;
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };
  //End of Handler Function

  const filteredItems = searchItems.filter((item) =>
    item.productinfo.productname
      .toLocaleLowerCase()
      .includes(debounceSearch.toLocaleLowerCase())
  );
  console.log(filteredItems);

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
          <Tooltip tooltip={"Search"}>
            <Search className="cursor-pointer" />
          </Tooltip>
        </button>
      </form>

      {isChecked && <SearchList results={filteredItems} />}
    </>
  );
}
