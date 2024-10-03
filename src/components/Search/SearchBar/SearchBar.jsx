import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../../hooks/Context/useSearch";
import { useDebounce } from "../../../hooks/UseDebounce/useDebounce";
import { getSearchProduct } from "../../../services/api/Product/Product.js";
import SearchList from "../SearchList/SearchList";
import Tooltip from "../../Tooltip/Tooltip.jsx";
import Spinner from "../../ui/Spinner/Spinner.jsx";

export default function SearchBar() {
  //States
  const [isChecked, setIsChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState({ term: "", flag: true });
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchItems, setSearchItems] = useState([]);

  // Context / Hooks
  const { setSearch, isLoading } = useSearch();
  const debounceSearch = useDebounce(searchTerm, 1000);
  const htmlSearchField = useRef(null);

  useEffect(() => {
    const searchProduct = async () => {
      const productList = await getSearchProduct(debounceSearch.term);
      if (debounceSearch.term === "") {
        setSearchItems([]);
      } else {
        setSearchItems(productList.productPaginated);
      }
    };

    if (debounceSearch.flag) searchProduct();

    const handleClickOutside = (e) => {
      if (
        htmlSearchField.current &&
        !htmlSearchField.current.contains(e.target)
      ) {
        setIsChecked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChecked, debounceSearch]);

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
        setSelectedItem((prev) => {
          const newIndex = Math.min((prev + 1) % searchItems.length);
          setSearchTerm({
            term: searchItems[newIndex]?.productinfo?.productname.trim() || "",
            flag: false,
          });
          return newIndex;
        });
        break;
      case "ArrowUp":
        setSelectedItem((prev) => {
          const newIndex = Math.max(
            (prev + searchItems.length - 1) % searchItems.length
          );
          setSearchTerm({
            term: searchItems[newIndex]?.productinfo?.productname.trim() || "",
            flag: false,
          });
          return newIndex;
        });
        break;
      case "Enter":
        e.preventDefault();
        break;
      case "Escape":
        setIsChecked(false);
        break;
    }
  };

  const handleChange = async (e) => {
    setSearchTerm({ term: e.target.value, flag: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };
  //End of Handler Functions

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
            value={searchTerm.term}
            onKeyDown={handleKeyDown}
          />
        )}

        <button type="submit" onClick={handleIcon} aria-label="Search">
          <Tooltip tooltip={"Search"}>
            <Search className="cursor-pointer" />
          </Tooltip>
        </button>
      </form>

      {isChecked && <SearchList results={searchItems} />}
    </>
  );
}
