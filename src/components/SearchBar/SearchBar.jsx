import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  // const targetRef = useRef(null);
  const [ischecked, setIsChecked] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  // const showSearchInput = ischecked || isFocused

  // useEffect(() => {
  //   targetRef.current.value = "";
  // },[showSearchInput]);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleOpen = () => {
    console.log("Trial");
  };
  return (
    <>
      <form className="flex items-center">
        {!ischecked ? (
          <label htmlFor="search-checkbox">
            <input
              type="checkbox"
              id="search-checkbox"
              defaultChecked={ischecked}
              onChange={handleChange}
              className="hidden"
            />
            <Search className="cursor-pointer" />
          </label>
        ) : (
          <label htmlFor="search" className="flex ">
            <input
              type="search"
              id="search"
              name=""
              className="outline-none text-slate-700 mr-2  "
            />
            <Search className="cursor-pointer" onClick={handleOpen} />
          </label>
        )}
      </form>
    </>
  );
}
