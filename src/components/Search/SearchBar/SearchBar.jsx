import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null);
  const [values, setValues] = useState("");
  const [query, setQuery] = useState([]);
  const handleIcon = (e) => {
    e.preventDefault();
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest("form").requestSubmit(e.currentTarget);
    }
    setIsChecked((prev) => !prev);
  };

  //End of Handle Functions
  useEffect(() => {
    const handleData = async () => {
      const url = "http://localhost:5000/api";

      try {
        const response = await fetch(`${url}/users/search?term=${values}`);
        const users = await response.json();
        setQuery(users);
      } catch (error) {
        console.error("Search Error: ", error);
      }
    };
    handleData();
  }, [values]);

  const handleValues = (e) =>{
      setValues(e.target.value)
  }
  return (
    <>
      <form className="flex items-center">
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="term"
            className="text-black p-1"
            ref={htmlSearchField}
            placeholder="Search Product"
            onChange={handleValues}
          />
        )}

        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer" />
        </button>
      </form>
    </>
  );
}
