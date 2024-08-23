import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      searchParams.get("productinfo.productname") &&
      searchParams.get("productinfo.productname") != ""
    ) {
      setSearchTerm(searchParams.get("productinfo.productname"));
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [searchParams]);

  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked) {
      e.target.closest("form").requestSubmit(e.currentTarget);
      if (searchTerm.trim() == "") setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
    if (searchTerm.trim() != "")
      setSearchParams({ "productinfo.productname": searchTerm });
  };

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
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        )}
        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>

  
    </>
  );
}
