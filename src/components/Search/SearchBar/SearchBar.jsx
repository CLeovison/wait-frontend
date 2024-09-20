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
  const [searchTerm, setSearchTerm] = useState({term: "", flag:true});
  const [selectedItem, setSelectedItem] = useState(0);
  const [searchItems, setSearchItems] = useState([]);

  // Context / Hooks
  const { setSearch } = useSearch();
  const debounceSearch = useDebounce(searchTerm, 1000);
  const htmlSearchField = useRef(null);

  //Start of UseEffect

  //UseEffect for the SearchBar HandleClick Outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        htmlSearchField.current &&
        !htmlSearchField.current.contains(e.target)
      ) {
        setIsChecked(false);
      }
    };

    isChecked
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChecked]);

  //UseEffect for Debounce
  useEffect(()=> {
    const searchProduct = async () => {
      const productList = await getSearchProduct(debounceSearch.term);

      debounceSearch.term === ""
      ? setSearchItems([])
      : setSearchItems(productList.productPaginated);
    }
    console.log("flag:", debounceSearch.flag)
    if(debounceSearch.flag) searchProduct();
    
  }, [debounceSearch]);

  //End of UseEffect

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
          const newIndex = Math.min(prev + 1, searchItems.length - 1);
          setSearchTerm({
            term: searchItems[newIndex]?.productinfo?.productname || "",
            flag: false
          });
          console.log(newIndex)
          return newIndex;
        });
        break;
      case "ArrowUp":
        setSelectedItem((prev) => {
          const newIndex = Math.max(prev - 1, 0);
          setSearchTerm({
            term: searchItems[newIndex]?.productinfo?.productname || "",
            flag: false
          });
          console.log(newIndex);
          
          return newIndex;
        });
        break;
      case "Enter":
        break;
      case "Escape":
        setIsChecked(false);
        break;
    }
  };
  
  
  const handleChange = async (e) => {
    setSearchTerm({term: e.target.value, flag:true});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };
  //End of Handler Function

  // might not be needed
  // const filteredItems = searchItems.filter((item) => {
  //   return item.productinfo.productname
  //     .toLocaleLowerCase()
  //     .includes(debounceSearch.term.toLocaleLowerCase());
  // });

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
